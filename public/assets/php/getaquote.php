<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // =================================
    // EMAIL CONFIGURATION
    // =================================
    // Replace these with your actual Gmail credentials
    // For security, consider using App Passwords instead of your main password
    // https://support.google.com/accounts/answer/185833
    
    $smtp_host = 'smtp.gmail.com';
    $smtp_port = 587;
    $smtp_username = 'ruchirakavinda17@gmail.com';  // CHANGE THIS to your Gmail
    $smtp_password = 'mijmtfuxvslclrdn';      // CHANGE THIS to your App Password
    $recipient_email = 'kavinda.jayawardhana24@gmail.com';
    $from_email = 'noreply@greenauto.lk';
    $from_name = 'Green Auto Quote System';

    // =================================
    // PROCESS FORM SUBMISSION
    // =================================

    // Only process POST requests
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get and sanitize form fields
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"), array(" "," "), $name);
        $phone = trim($_POST["phone"]);
        $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";
        
        $vehicleType = isset($_POST["vehicleType"]) ? trim($_POST["vehicleType"]) : "";
        $vehicleBrand = isset($_POST["vehicleBrand"]) ? trim($_POST["vehicleBrand"]) : "";
        $vehicleModel = isset($_POST["vehicleModel"]) ? trim($_POST["vehicleModel"]) : "";
        $serviceNeeded = isset($_POST["serviceNeeded"]) ? trim($_POST["serviceNeeded"]) : "";

        // Email is optional
        $email = "";
        if (!empty($_POST["email"])) {
            $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $email = "";
            }
        }

        // Validate required fields
        if (empty($name) || empty($phone)) {
            http_response_code(400);
            echo "Please complete all required fields (Name and Phone).";
            exit;
        }

        // Build email content (HTML format)
        $email_body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #28a745; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                .section { margin-bottom: 20px; }
                .section-title { font-weight: bold; color: #28a745; border-bottom: 2px solid #28a745; padding-bottom: 5px; margin-bottom: 10px; }
                .field { margin: 8px 0; }
                .field-label { font-weight: bold; display: inline-block; width: 150px; }
                .footer { background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>🚗 New Quote Request</h2>
                </div>
                <div class='content'>
                    <div class='section'>
                        <div class='section-title'>CONTACT INFORMATION</div>
                        <div class='field'><span class='field-label'>Name:</span> " . htmlspecialchars($name) . "</div>
                        <div class='field'><span class='field-label'>Phone:</span> " . htmlspecialchars($phone) . "</div>";
        
        if (!empty($email)) {
            $email_body .= "<div class='field'><span class='field-label'>Email:</span> " . htmlspecialchars($email) . "</div>";
        }
        
        $email_body .= "
                    </div>";
        
        // Add vehicle information if provided
        if (!empty($vehicleType) || !empty($vehicleBrand) || !empty($vehicleModel) || !empty($serviceNeeded)) {
            $email_body .= "
                    <div class='section'>
                        <div class='section-title'>VEHICLE INFORMATION</div>";
            
            if (!empty($vehicleType)) {
                $email_body .= "<div class='field'><span class='field-label'>Vehicle Type:</span> " . htmlspecialchars($vehicleType) . "</div>";
            }
            if (!empty($vehicleBrand)) {
                $email_body .= "<div class='field'><span class='field-label'>Vehicle Brand:</span> " . htmlspecialchars($vehicleBrand) . "</div>";
            }
            if (!empty($vehicleModel)) {
                $email_body .= "<div class='field'><span class='field-label'>Vehicle Model:</span> " . htmlspecialchars($vehicleModel) . "</div>";
            }
            if (!empty($serviceNeeded)) {
                $email_body .= "<div class='field'><span class='field-label'>Service Needed:</span> " . htmlspecialchars($serviceNeeded) . "</div>";
            }
            
            $email_body .= "
                    </div>";
        }
        
        // Add message if provided
        if (!empty($message)) {
            $email_body .= "
                    <div class='section'>
                        <div class='section-title'>MESSAGE</div>
                        <div style='padding: 10px; background-color: white; border-left: 3px solid #28a745;'>" 
                        . nl2br(htmlspecialchars($message)) . 
                        "</div>
                    </div>";
        }
        
        $email_body .= "
                </div>
                <div class='footer'>
                    <p>This email was sent from the Green Auto website quote form.</p>
                    <p>Sent on: " . date('F j, Y, g:i a') . "</p>
                </div>
            </div>
        </body>
        </html>";

        // =================================
        // SEND EMAIL USING PHPMAILER
        // =================================

        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = $smtp_host;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtp_username;
            $mail->Password   = $smtp_password;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = $smtp_port;
            
            // Enable verbose debug output (comment out in production)
            // $mail->SMTPDebug = 2;
            // $mail->Debugoutput = 'error_log';

            // Recipients
            $mail->setFrom($from_email, $from_name);
            $mail->addAddress($recipient_email);
            
            // Reply-to address
            if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $mail->addReplyTo($email, $name);
            }

            // Content
            $mail->isHTML(true);
            $mail->Subject = "Get a Quote Request from " . $name;
            $mail->Body    = $email_body;
            
            // Alternative plain text version
            $mail->AltBody = "Get a Quote Request\n\n" .
                            "Name: $name\n" .
                            "Phone: $phone\n" .
                            (!empty($email) ? "Email: $email\n" : "") .
                            "\nVehicle Type: $vehicleType\n" .
                            "Vehicle Brand: $vehicleBrand\n" .
                            "Vehicle Model: $vehicleModel\n" .
                            "Service Needed: $serviceNeeded\n" .
                            (!empty($message) ? "\nMessage:\n$message" : "");

            // Send email
            $mail->send();
            
            // Log success
            error_log("Quote email sent successfully to: $recipient_email from $name ($phone)");
            
            http_response_code(200);
            echo "Thank You! Your quote request has been sent successfully. We'll contact you soon!";

        } catch (Exception $e) {
            // Log detailed error
            error_log("Quote email failed to send.");
            error_log("Error Info: {$mail->ErrorInfo}");
            error_log("Exception: " . $e->getMessage());
            error_log("From: $name, Phone: $phone");
            
            http_response_code(500);
            echo "Oops! Something went wrong sending your request. Please call us directly at +94 77 216 6306 or email kavinda.jayawardhana24@gmail.com.";
        }

    } else {
        // Not a POST request
        http_response_code(403);
        echo "Invalid request method. Please use the form to submit your quote request.";
    }

?>