<?php
include 'include/header.inc.php'; 

require 'vendor/autoload.php';
// Include the PHPMailer library
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Initialize notification variables
$notification = '';
$notificationType = '';

// Email configuration
function getMailConfig() {
    return [
        'smtp_host' => 'smtp.gmail.com',
        'smtp_username' => 'gayanrulz63@gmail.com', // Replace with your email
        'smtp_password' => 'doqr pkuk ndhz whqq', // Replace with your app password
        'smtp_port' => 587,
        'from_email' => 'gayanrulz63@gmail.com', // Replace with your email
        'from_name' => 'CarServ',
        'admin_email' => 'gayanrulz63@gmail.com' // Replace with admin email
    ];
}

function createMailer() {
    $config = getMailConfig();
    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = $config['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['smtp_username'];
        $mail->Password = $config['smtp_password'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $config['smtp_port'];
        
        return $mail;
    } catch (Exception $e) {
        error_log("Mail configuration error: " . $e->getMessage());
        return null;
    }
}

function sendAppointmentEmail($name, $service, $phone, $date, $time) {
    $config = getMailConfig();
    $mail = createMailer();
    
    if (!$mail) {
        return false;
    }
    
    try {
        // Recipients
        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($config['admin_email'], 'Admin');
        $mail->addReplyTo($config['from_email'], $config['from_name']);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Appointment Booking - ' . htmlspecialchars($service);
        $mail->Body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
                .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
                .detail { margin: 10px 0; }
                .label { font-weight: bold; color: #495057; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2 style='margin: 0; color: #495057;'>New Appointment Booking</h2>
                </div>
                <div class='content'>
                    <div class='detail'><span class='label'>Customer Name:</span> " . htmlspecialchars($name) . "</div>
                    <div class='detail'><span class='label'>Phone Number:</span> " . htmlspecialchars($phone) . "</div>
                    <div class='detail'><span class='label'>Service Requested:</span> " . htmlspecialchars($service) . "</div>
                    <div class='detail'><span class='label'>Appointment Date:</span> " . htmlspecialchars($date) . "</div>
                    <div class='detail'><span class='label'>Appointment Time:</span> " . htmlspecialchars($time) . "</div>
                    <hr>
                    <p><strong>Action Required:</strong> Please contact the customer to confirm this appointment.</p>
                </div>
            </div>
        </body>
        </html>";
        
        $mail->AltBody = "New Appointment Booking\n\nCustomer: " . $name . "\nPhone: " . $phone . "\nService: " . $service . "\nDate: " . $date . "\nTime: " . $time . "\n\nPlease contact the customer to confirm the appointment.";
        
        $mail->send();
        return true;
        
    } catch (Exception $e) {
        error_log("Appointment email error: " . $mail->ErrorInfo);
        return false;
    }
}

function sendContactEmail($name, $email, $phone, $message) {
    $config = getMailConfig();
    $mail = createMailer();
    
    if (!$mail) {
        return false;
    }
    
    try {
        // Recipients
        $mail->setFrom($config['from_email'], $config['from_name'] . ' Contact Form');
        $mail->addAddress($config['admin_email'], 'Admin');
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission from ' . htmlspecialchars($name);
        $mail->Body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
                .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
                .detail { margin: 10px 0; }
                .label { font-weight: bold; color: #495057; }
                .message-box { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 15px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2 style='margin: 0; color: #495057;'>New Contact Form Submission</h2>
                </div>
                <div class='content'>
                    <div class='detail'><span class='label'>Name:</span> " . htmlspecialchars($name) . "</div>
                    <div class='detail'><span class='label'>Email:</span> " . htmlspecialchars($email) . "</div>
                    <div class='detail'><span class='label'>Phone:</span> " . htmlspecialchars($phone ?: 'Not provided') . "</div>
                    <div class='message-box'>
                        <div class='label'>Message:</div>
                        <p>" . nl2br(htmlspecialchars($message)) . "</p>
                    </div>
                </div>
            </div>
        </body>
        </html>";
        
        $mail->AltBody = "New Contact Form Submission\n\nName: " . $name . "\nEmail: " . $email . "\nPhone: " . ($phone ?: 'Not provided') . "\n\nMessage:\n" . $message;
        
        $mail->send();
        
        // Send auto-reply to customer
        sendAutoReply($email, $name);
        
        return true;
        
    } catch (Exception $e) {
        error_log("Contact email error: " . $mail->ErrorInfo);
        return false;
    }
}

function sendAutoReply($customerEmail, $customerName) {
    $config = getMailConfig();
    $mail = createMailer();
    
    if (!$mail) {
        return false;
    }
    
    try {
        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($customerEmail, $customerName);
        
        $mail->isHTML(true);
        $mail->Subject = 'Thank you for contacting ' . $config['from_name'];
        $mail->Body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #007bff; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
                .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2 style='margin: 0;'>Thank you for contacting us!</h2>
                </div>
                <div class='content'>
                    <p>Hello " . htmlspecialchars($customerName) . ",</p>
                    <p>We have received your message and appreciate you taking the time to contact us.</p>
                    <p>Our team will review your inquiry and get back to you within 24 hours during business days.</p>
                    <p>If you have any urgent concerns, please feel free to call us directly.</p>
                    <br>
                    <p>Best regards,<br><strong>" . htmlspecialchars($config['from_name']) . " Team</strong></p>
                </div>
            </div>
        </body>
        </html>";
        
        $mail->send();
        return true;
        
    } catch (Exception $e) {
        error_log("Auto-reply error: " . $mail->ErrorInfo);
        return false;
    }
}

// Initialize form data variables for persistence
$formData = [
    'name' => '',
    'email' => '',
    'phone' => '',
    'message' => ''
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Check if it's the appointment form
    if (isset($_POST['contactsName'])) {
        $name = trim($_POST['contactsName']);
        $service = trim($_POST['contactsService']);
        $phone = trim($_POST['contactsTel']);
        $date = trim($_POST['contactsDate']);
        
        // Safe time handling
        $hour = isset($_POST['appointmentHour']) ? trim($_POST['appointmentHour']) : '00';
        $minute = isset($_POST['appointmentMinute']) ? trim($_POST['appointmentMinute']) : '00';
        $time = $hour . ':' . $minute;
        
        if (empty($name) || empty($service) || empty($phone) || empty($date)) {
            $notification = 'Please fill in all required fields for the appointment.';
            $notificationType = 'error';
        } else {
            if (sendAppointmentEmail($name, $service, $phone, $date, $time)) {
                // Force a clean redirect with success parameter
                $redirectUrl = $_SERVER['PHP_SELF'] . "?success=appointment&t=" . time();
                header("Location: " . $redirectUrl);
                exit();
            } else {
                $notification = 'Oops! There was an error sending your appointment request. Please try again or contact us directly.';
                $notificationType = 'error';
            }
        }
    }
    
    // Check if it's the contact form
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        // Store form data for persistence in case of error
        $formData['name'] = trim($_POST['name']);
        $formData['email'] = trim($_POST['email']);
        $formData['phone'] = trim($_POST['phone']);
        $formData['message'] = trim($_POST['message']);
        
        // Validation
        if (empty($formData['name']) || empty($formData['email']) || empty($formData['message'])) {
            $notification = 'Please fill in all required fields (Name, Email, and Message are required).';
            $notificationType = 'error';
        } elseif (!filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
            $notification = 'Please enter a valid email address.';
            $notificationType = 'error';
        } else {
            if (sendContactEmail($formData['name'], $formData['email'], $formData['phone'], $formData['message'])) {
                // Force a clean redirect with success parameter
                $redirectUrl = $_SERVER['PHP_SELF'] . "?success=contact&t=" . time();
                header("Location: " . $redirectUrl);
                exit();
            } else {
                $notification = 'Sorry, there was an error sending your message. Please try again or contact us directly.';
                $notificationType = 'error';
            }
        }
    }
}

// Handle success messages from redirects - THIS IS THE KEY FIX
if (isset($_GET['success'])) {
    if ($_GET['success'] === 'contact') {
        $notification = 'Amazing! Your message has been sent successfully! We will get back to you within 24 hours.';
        $notificationType = 'success';
        // Clear form data for success state
        $formData = ['name' => '', 'email' => '', 'phone' => '', 'message' => ''];
    } elseif ($_GET['success'] === 'appointment') {
        $notification = 'Fantastic! Your appointment booking has been sent successfully! We will contact you soon to confirm your appointment.';
        $notificationType = 'success';
    }
}
?>

<!-- Enhanced Notification and Button Styles -->
<style>
    /* Enhanced Success Celebration Animation */
    @keyframes successCelebration {
        0% { transform: scale(0) rotate(-180deg); opacity: 0; }
        50% { transform: scale(1.1) rotate(0deg); opacity: 1; }
        70% { transform: scale(0.95) rotate(0deg); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    
    @keyframes confettiDrop {
        0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    /* Confetti Animation */
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24);
        z-index: 10000;
        pointer-events: none;
        animation: confettiDrop 3s linear forwards;
    }
    
    /* Enhanced Notification Styles */
    .notification {
        position: fixed;
        top: 30px;
        right: 30px;
        padding: 25px 35px;
        border-radius: 20px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        min-width: 400px;
        max-width: 500px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: translateX(500px) scale(0.8);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        backdrop-filter: blur(15px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }
    
    .notification::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3));
        border-radius: 20px;
        z-index: -1;
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
    }
    
    .notification.show {
        transform: translateX(0) scale(1);
        opacity: 1;
        animation: bounce 0.8s ease-out;
    }
    
    @keyframes bounce {
        0% { transform: translateY(-20px) scale(0.8); }
        50% { transform: translateY(10px) scale(1.05); }
        100% { transform: translateY(0) scale(1); }
    }
    
    .notification.success {
        background: linear-gradient(135deg, 
            rgba(40, 167, 69, 0.95) 0%, 
            rgba(32, 201, 151, 0.95) 50%, 
            rgba(72, 219, 251, 0.95) 100%);
        animation: successCelebration 0.8s ease-out;
    }
    
    .notification.error {
        background: linear-gradient(135deg, 
            rgba(220, 53, 69, 0.95) 0%, 
            rgba(253, 126, 20, 0.95) 50%, 
            rgba(255, 107, 107, 0.95) 100%);
    }
    
    .notification .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        font-size: 24px;
        line-height: 1;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
    }
    
    .notification .close-btn:hover {
        background: rgba(255, 255, 255, 0.4);
        transform: scale(1.1) rotate(90deg);
    }
    
    .notification-icon {
        display: inline-block;
        margin-right: 15px;
        font-size: 28px;
        animation: iconPop 0.8s ease;
    }
    
    @keyframes iconPop {
        0% { transform: scale(0) rotate(180deg); }
        50% { transform: scale(1.3) rotate(0deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
    
    .notification-text {
        font-size: 16px;
        line-height: 1.5;
        margin-right: 40px;
    }
    
    /* Floating particles for success */
    .notification.success::after {
        content: '✨🎉✨';
        position: absolute;
        top: -20px;
        right: 20px;
        font-size: 20px;
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    /* Progress bar for notification */
    .notification-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 0 0 20px 20px;
        animation: progressBar 6s linear forwards;
    }
    
    @keyframes progressBar {
        0% { width: 100%; }
        100% { width: 0%; }
    }

    /* Enhanced Send Message Button */
    .send-message-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        color: white;
        font-size: 18px;
        font-weight: 600;
        padding: 20px 45px;
        border-radius: 60px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        min-width: 220px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    }

    .send-message-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
    }

    .send-message-btn:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 50px rgba(102, 126, 234, 0.5);
    }

    .send-message-btn:hover:before {
        left: 100%;
    }

    .send-message-btn:active {
        transform: translateY(-2px);
    }

    /* Loading State */
    .send-message-btn.loading {
        pointer-events: none;
        background: linear-gradient(135deg, #95a5f0 0%, #a67bc4 100%);
        animation: pulse 1.5s infinite;
    }

    .send-message-btn:disabled {
        cursor: not-allowed;
        opacity: 0.8;
    }

    @keyframes pulse {
        0%, 100% { box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4); }
        50% { box-shadow: 0 20px 50px rgba(102, 126, 234, 0.6); }
    }

    .send-message-btn.loading .btn-icon svg {
        animation: spin 1s linear infinite;
    }

    /* Success State */
    .send-message-btn.success {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        box-shadow: 0 20px 50px rgba(40, 167, 69, 0.5);
        animation: successPulse 0.6s ease;
    }

    @keyframes successPulse {
        0% { transform: translateY(-4px) scale(1); }
        50% { transform: translateY(-4px) scale(1.05); }
        100% { transform: translateY(-4px) scale(1); }
    }

    .send-message-btn.success .btn-icon {
        animation: successBounce 0.8s ease;
    }

    @keyframes successBounce {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.2) rotate(-10deg); }
        75% { transform: scale(1.2) rotate(10deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Form input enhancements */
    .single-form input:focus,
    .single-form textarea:focus {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        border-color: #667eea;
    }

    /* Form validation styles */
    .single-form input.error,
    .single-form textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15);
        animation: shake 0.5s ease-in-out;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    .single-form input.success,
    .single-form textarea.success {
        border-color: #28a745;
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.15);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .notification {
            min-width: 320px;
            max-width: calc(100vw - 30px);
            right: 15px;
            top: 15px;
            padding: 20px 25px;
        }
        
        .send-message-btn {
            padding: 18px 35px;
            font-size: 16px;
            min-width: 200px;
        }
        
        .notification-text {
            font-size: 15px;
            margin-right: 35px;
        }
    }
</style>

<!-- Display Notification - THIS IS CRITICAL -->
<?php if (!empty($notification)): ?>
<div id="notification" class="notification <?php echo htmlspecialchars($notificationType); ?>">
    <span class="notification-icon">
        <?php echo $notificationType === 'success' ? '🎉' : '⚠️'; ?>
    </span>
    <span class="notification-text"><?php echo $notification; ?></span>
    <span class="close-btn" onclick="closeNotification()">&times;</span>
    <div class="notification-progress"></div>
</div>
<?php endif; ?>

        <!-- Page Banner Section Start -->
        <div class="section page-banner-section" style="background-image: url(assets/images/page-banner-bg.webp);">
            <div class="container">
                <!-- Page Banner Wrapper Start -->
                <div class="page-banner-wrapper">

                    <!-- Page Banner Content Start -->
                    <div class="page-banner-content">

                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h5 class="sub-title">Connect</h5>
                            <h2 class="main-title">Connect <br> with us</h2>
                        </div>
                        <!-- Section Title End -->

                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Connect</li>
                        </ul>
                    </div>
                    <!-- Page Banner Content End -->

                    <!-- Page Banner Images Start -->
                    <div class="page-banner-images">
                        <img src="assets/images/contact.png" alt="Page Banner" >
                    </div>
                    <!-- Page Banner Images End -->

                </div>
                <!-- Page Banner Wrapper End -->
            </div>
        </div>
        <!-- Page Banner Section End -->

        <!-- Contact Section Start -->
        <div class="section section-padding-02">
            <div class="container">

                <!-- Contact Wrapper Start -->
                <div class="contact-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <!-- Contact Image Start -->
                            <div class="contact-image" data-aos="fade-right" data-aos-delay="300">
                                <img src="assets/images/contact.png" alt="Contact">
                            </div>
                            <!-- Contact Image End -->
                        </div>
                        <div class="col-lg-6">
                            <!-- Contact Content Start -->
                            <div class="contact-content" data-aos="fade-left" data-aos-delay="300">
                                <h2 class="title">Contact information</h2>
                                <p class="sub-title">You can connect with us</p>

                                <div class="content-info">
                                    <div class="row gx-md-5">
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Find us here</h4>
                                                <p>280 SS Dias Mawatha, Diwulapitiya, Boralasgamuwa, Boralasgamuwa, Srilanka</p>
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Call us</h4>
                                                <p><a href="tel:+94 77 721 1639">+94 77 721 1639</a></p>
                                            
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Single Info Start -->
                                            <div class="single-info">
                                                <h4 class="info-title">Web Info</h4>
                                                <p><a href="mailto:info@nrautohybrid.lk">info@nrautohybrid.lk</a></p>
                                               
                                            </div>
                                            <!-- Single Info End -->
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <!-- Contact Content End -->
                        </div>
                    </div>
                </div>
                <!-- Contact Wrapper End -->

            </div>
        </div>
        <!-- Contact Section End -->

        <!-- Contact Form Section Start -->
        <div class="section section-padding">
            <div class="container">

                <!-- Contact Form Wrapper Start -->
                <div class="contact-form-wrapper text-center" data-aos="fade-up" data-aos-delay="300">
                    <h3 class="title">Get in Touch</h3>

                    <div class="form-wrapper">
                        <form id="contact-form" method="POST" action="">
                            <div class="row">
                                <div class="col-md-4">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input type="text" placeholder="Your Name" name="name" id="name" value="<?php echo htmlspecialchars($formData['name']); ?>" required>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-4">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input type="email" placeholder="Email Address" name="email" id="email" value="<?php echo htmlspecialchars($formData['email']); ?>" required>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-4">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input type="text" placeholder="Phone Number" name="phone" id="phone" value="<?php echo htmlspecialchars($formData['phone']); ?>">
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <textarea placeholder="Write your message here..." name="message" id="message" required><?php echo htmlspecialchars($formData['message']); ?></textarea>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <button class="send-message-btn" type="submit" id="sendBtn">
                                            <span class="btn-text">Send Message</span>
                                            <span class="btn-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <!-- Contact Form Wrapper End -->

            </div>
        </div>
        <!-- Contact Form Section End -->

        <div class="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.301738425823!2d79.89965931477398!3d6.852285095077916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a36315c8d1b%3A0x5d1e9d9f8e1c8f9b!2sBoralasgamuwa!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk" 
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
        </div>

<script>
// Confetti animation function
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#26de81'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti && confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

function showSuccess() {
    const sendButton = document.getElementById('sendBtn');
    if (sendButton) {
        sendButton.classList.remove('loading');
        sendButton.classList.add('success');
        sendButton.disabled = false;
        
        const buttonText = sendButton.querySelector('.btn-text');
        const buttonIcon = sendButton.querySelector('.btn-icon');
        
        if (buttonText && buttonIcon) {
            buttonText.textContent = 'Message Sent!';
            buttonIcon.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        }
        
        setTimeout(() => {
            resetButton();
        }, 4000);
    }
}

function resetButton() {
    const sendButton = document.getElementById('sendBtn');
    if (sendButton) {
        sendButton.classList.remove('loading', 'success');
        sendButton.disabled = false;
        const buttonText = sendButton.querySelector('.btn-text');
        const buttonIcon = sendButton.querySelector('.btn-icon');
        
        if (buttonText && buttonIcon) {
            buttonText.textContent = 'Send Message';
            buttonIcon.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                </svg>
            `;
        }
        
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.pointerEvents = '';
            input.style.opacity = '';
        });
    }
}

function closeNotification() {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
        notification.style.transform = 'translateX(500px) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.remove();
            }
        }, 500);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    const contactForm = document.getElementById('contact-form');
    const sendButton = document.getElementById('sendBtn');
    
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const successType = urlParams.get('success');
    
    // Handle notification display
    if (notification) {
        setTimeout(() => {
            notification.classList.add('show');
            
            if (notification.classList.contains('success')) {
                setTimeout(() => {
                    createConfetti();
                }, 500);
                showSuccess();
            }
        }, 200);
        
        // Auto hide after 6 seconds
        setTimeout(() => {
            closeNotification();
        }, 6000);
    } else if (successType) {
        // Fallback: create notification if it doesn't exist but we have success param
        let message = '';
        if (successType === 'contact') {
            message = 'Amazing! Your message has been sent successfully! We will get back to you within 24 hours.';
        } else if (successType === 'appointment') {
            message = 'Fantastic! Your appointment booking has been sent successfully! We will contact you soon to confirm your appointment.';
        }
        
        if (message) {
            const tempNotification = document.createElement('div');
            tempNotification.id = 'notification';
            tempNotification.className = 'notification success show';
            tempNotification.innerHTML = `
                <span class="notification-icon">🎉</span>
                <span class="notification-text">${message}</span>
                <span class="close-btn" onclick="closeNotification()">&times;</span>
                <div class="notification-progress"></div>
            `;
            document.body.appendChild(tempNotification);
            
            setTimeout(() => createConfetti(), 500);
            showSuccess();
            
            setTimeout(() => {
                closeNotification();
            }, 6000);
        }
    }
    
    // Form submission handling
    if (contactForm && sendButton) {
        const buttonText = sendButton.querySelector('.btn-text');
        const buttonIcon = sendButton.querySelector('.btn-icon');
        
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                showFormError('Please fill in all required fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                e.preventDefault();
                showFormError('Please enter a valid email address');
                return;
            }
            
            // Add loading state
            sendButton.classList.add('loading');
            sendButton.disabled = true;
            
            if (buttonText && buttonIcon) {
                buttonText.textContent = 'Sending...';
                buttonIcon.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                `;
            }
            
            const inputs = this.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.style.pointerEvents = 'none';
                input.style.opacity = '0.7';
            });
        });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function showFormError(message) {
        resetButton();
        
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error show';
        errorNotification.style.top = '100px';
        errorNotification.innerHTML = `
            <span class="notification-icon">⚠️</span>
            <span class="notification-text">${message}</span>
            <span class="close-btn" onclick="this.parentElement.remove()">&times;</span>
            <div class="notification-progress"></div>
        `;
        
        document.body.appendChild(errorNotification);
        
        setTimeout(() => {
            errorNotification.remove();
        }, 4000);
        
        if (contactForm) {
            contactForm.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                contactForm.style.animation = '';
            }, 500);
        }
    }
    
    // Input validation
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.type === 'email') {
                if (this.value.trim() && isValidEmail(this.value)) {
                    this.classList.remove('error');
                    this.classList.add('success');
                } else if (this.value.trim()) {
                    this.classList.remove('success');
                    this.classList.add('error');
                }
            } else {
                if (this.value.trim()) {
                    this.classList.remove('error');
                    this.classList.add('success');
                } else {
                    this.classList.remove('success');
                    this.classList.add('error');
                }
            }
        });
        
        input.addEventListener('focus', function() {
            this.classList.remove('error', 'success');
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error') && this.value.trim()) {
                this.classList.remove('error');
                if (this.type !== 'email' || isValidEmail(this.value)) {
                    this.classList.add('success');
                }
            }
        });
    });
    
    // Add focus ring animation
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});
</script>

<?php
include 'include/footer.inc.php'; 
?>

        <!--Back To Start-->
        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>
        <!--Back To End-->

    </div>

    <!-- JS
    ============================================ -->

    <!-- Modernizer & jQuery JS -->
    <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>

    <!-- Bootstrap JS -->
    <!-- <script src="assets/js/plugins/popper.min.js"></script>
    <script src="assets/js/plugins/bootstrap.min.js"></script> -->

    <!-- Plugins JS -->
    <!-- <script src="assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="assets/js/plugins/jquery-ui.min.js"></script>
    <script src="assets/js/plugins/select2.min.js"></script>
    <script src="assets/js/plugins/ajax-contact.js"></script>
    <script src="assets/js/plugins/aos.js"></script> -->

    <!--====== Use the minified version files listed below for better performance and remove the files listed above ======-->
    <script src="assets/js/plugins.min.js"></script>

    <!-- Main JS -->
    <script src="assets/js/main.js"></script>

</body>

</html>