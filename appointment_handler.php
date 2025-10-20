<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// WhatsApp API Configuration
$WHATSAPP_NUMBER = '+94763571659'; // Replace with your business WhatsApp number
$ULTRAMSG_TOKEN = '6k1cx4cd5i432mi3'; // Replace with your UltraMsg token
$ULTRAMSG_INSTANCE_ID = 'instance137669'; // Replace with your UltraMsg instance ID
$ULTRAMSG_API_URL = "https://api.ultramsg.com/{$ULTRAMSG_INSTANCE_ID}";

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed'
    ]);
    exit;
}

try {
    // Retrieve and sanitize form data
    $customerName = isset($_POST['customerName']) ? trim($_POST['customerName']) : '';
    $contactNumber = isset($_POST['contactNumber']) ? trim($_POST['contactNumber']) : '';
    $appointmentDate = isset($_POST['appointmentDate']) ? trim($_POST['appointmentDate']) : '';
    $appointmentTime = isset($_POST['appointmentTime']) ? trim($_POST['appointmentTime']) : '';
    $vehicleBrand = isset($_POST['vehicleBrand']) ? trim($_POST['vehicleBrand']) : '';
    $vehicleType = isset($_POST['vehicleType']) ? trim($_POST['vehicleType']) : '';
    $serviceType = isset($_POST['serviceType']) ? trim($_POST['serviceType']) : 'General Service';
    $additionalNotes = isset($_POST['additionalNotes']) ? trim($_POST['additionalNotes']) : '';

    // Validation
    $errors = [];

    if (empty($customerName)) {
        $errors[] = 'Customer name is required';
    }

    if (empty($contactNumber)) {
        $errors[] = 'Contact number is required';
    } elseif (!preg_match('/^[\d\s\-\+\(\)]{10,15}$/', $contactNumber)) {
        $errors[] = 'Please provide a valid contact number';
    }

    if (empty($appointmentDate)) {
        $errors[] = 'Appointment date is required';
    } elseif (strtotime($appointmentDate) < strtotime(date('Y-m-d'))) {
        $errors[] = 'Appointment date must be today or in the future';
    }

    if (empty($appointmentTime)) {
        $errors[] = 'Appointment time is required';
    }

    if (empty($vehicleBrand)) {
        $errors[] = 'Vehicle brand is required';
    }

    if (empty($vehicleType)) {
        $errors[] = 'Vehicle model is required';
    }

    // Return validation errors if any
    if (!empty($errors)) {
        echo json_encode([
            'success' => false,
            'message' => implode('. ', $errors)
        ]);
        exit;
    }

    // Format date and time for better readability
    $formattedDate = date('l, F j, Y', strtotime($appointmentDate));
    $formattedTime = date('g:i A', strtotime($appointmentTime));

    // Create comprehensive WhatsApp message for auto repair service (BUSINESS OWNER)
    $businessMessage = "🚗 *NEW CAR SERVICE APPOINTMENT REQUEST* 🚗\n\n";
    $businessMessage .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $businessMessage .= "👤 *CUSTOMER INFORMATION*\n";
    $businessMessage .= "Name: *{$customerName}*\n";
    $businessMessage .= "Phone: *{$contactNumber}*\n\n";

    $businessMessage .= "🚙 *VEHICLE DETAILS*\n";
    $businessMessage .= "Brand: *{$vehicleBrand}*\n";
    $businessMessage .= "Model: *{$vehicleType}*\n\n";

    $businessMessage .= "📅 *APPOINTMENT REQUEST*\n";
    $businessMessage .= "Date: *{$formattedDate}*\n";
    $businessMessage .= "Time: *{$formattedTime}*\n\n";

    $businessMessage .= "🔧 *SERVICE TYPE*\n";
    $businessMessage .= "*{$serviceType}*\n\n";

    if (!empty($additionalNotes)) {
        $businessMessage .= "📝 *ADDITIONAL NOTES*\n";
        $businessMessage .= "{$additionalNotes}\n\n";
    }

    $businessMessage .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $businessMessage .= "🏢 *NR AUTOMART*\n";
    $businessMessage .= "Professional Auto Repair Services\n";
    $businessMessage .= "📍 328D, Marid Drive, Ackloand\n";
    $businessMessage .= "📞 +12(025) 256 214\n\n";
    $businessMessage .= "⏳ Status: *PENDING CONFIRMATION*\n";
    $businessMessage .= "We will contact the customer shortly to confirm this appointment.\n\n";
    $businessMessage .= "Thank you for choosing NR Automart for your automotive needs! 🔧";

    // Create customer confirmation WhatsApp message
    $customerMessage = "🚗 *APPOINTMENT REQUEST CONFIRMATION* 🚗\n\n";
    $customerMessage .= "Hi *{$customerName}*! 👋\n\n";
    $customerMessage .= "Thank you for choosing *NR AUTOMART* for your vehicle service needs!\n\n";

    $customerMessage .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $customerMessage .= "📋 *YOUR APPOINTMENT DETAILS*\n";
    $customerMessage .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    $customerMessage .= "🚙 *Vehicle:* {$vehicleBrand} {$vehicleType}\n";
    $customerMessage .= "🔧 *Service Type:* {$serviceType}\n";
    $customerMessage .= "📅 *Requested Date:* {$formattedDate}\n";
    $customerMessage .= "⏰ *Requested Time:* {$formattedTime}\n";
    $customerMessage .= "📱 *Your Contact:* {$contactNumber}\n\n";

    if (!empty($additionalNotes)) {
        $customerMessage .= "📝 *Your Notes:* {$additionalNotes}\n\n";
    }

    $customerMessage .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $customerMessage .= "⏳ *STATUS: PENDING CONFIRMATION*\n";
    $customerMessage .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    $customerMessage .= "🔔 *WHAT'S NEXT?*\n";
    $customerMessage .= "• Our team will review your request\n";
    $customerMessage .= "• We'll contact you within *2 hours* to confirm\n";
    $customerMessage .= "• You'll receive final appointment confirmation\n";
    $customerMessage .= "• We'll send appointment reminders\n\n";

    $customerMessage .= "🏢 *NR AUTOMART*\n";
    $customerMessage .= "Professional Auto Repair Services\n";
    $customerMessage .= "📍 328D, Marid Drive, Ackloand\n";
    $customerMessage .= "📞 +12(025) 256 214\n";
    $customerMessage .= "🕐 Mon-Sat: 8:00 AM - 6:00 PM\n\n";

    $customerMessage .= "❓ *Questions?* Reply to this message or call us!\n";
    $customerMessage .= "🚗 *Quality service you can trust!* ✨\n\n";
    $customerMessage .= "_Reference ID: " . uniqid('NRAP_', true) . "_";

    // Log the appointment request
    $logData = [
        'timestamp' => date('Y-m-d H:i:s'),
        'customer_name' => $customerName,
        'contact_number' => $contactNumber,
        'appointment_date' => $appointmentDate,
        'appointment_time' => $appointmentTime,
        'vehicle_brand' => $vehicleBrand,
        'vehicle_model' => $vehicleType,
        'service_type' => $serviceType,
        'additional_notes' => $additionalNotes
    ];

    $logEntry = implode(' | ', $logData) . PHP_EOL;
    file_put_contents('nrautomart_appointments.log', $logEntry, FILE_APPEND | LOCK_EX);

    // Send WhatsApp message to business owner
    $businessResult = sendWhatsAppMessage($WHATSAPP_NUMBER, $businessMessage);

    // Send confirmation message to customer
    $formattedCustomerNumber = formatPhoneNumber($contactNumber);
    $customerResult = sendWhatsAppMessage($formattedCustomerNumber, $customerMessage);

    if ($businessResult['success']) {
        // Log customer confirmation status
        if ($customerResult['success']) {
            error_log("Customer confirmation sent successfully to: " . $contactNumber);

            echo json_encode([
                'success' => true,
                'message' => 'Your appointment request has been sent successfully! We will contact you shortly to confirm your car service appointment. A confirmation message has been sent to your phone.',
                'appointment_details' => [
                    'customer_name' => $customerName,
                    'vehicle' => "{$vehicleBrand} {$vehicleType}",
                    'service_type' => $serviceType,
                    'date' => $formattedDate,
                    'time' => $formattedTime
                ],
                'notifications' => [
                    'business_notified' => true,
                    'customer_confirmed' => true
                ]
            ]);
        } else {
            error_log("Failed to send customer confirmation: " . json_encode($customerResult));

            echo json_encode([
                'success' => true,
                'message' => 'Your appointment request has been sent successfully! We will contact you shortly to confirm your car service appointment.',
                'appointment_details' => [
                    'customer_name' => $customerName,
                    'vehicle' => "{$vehicleBrand} {$vehicleType}",
                    'service_type' => $serviceType,
                    'date' => $formattedDate,
                    'time' => $formattedTime
                ],
                'notifications' => [
                    'business_notified' => true,
                    'customer_confirmed' => false,
                    'customer_confirmation_error' => $customerResult['error'] ?? 'Unknown error'
                ]
            ]);
        }
    } else {
        // Log the error for debugging
        error_log("WhatsApp sending failed: " . json_encode($businessResult));

        echo json_encode([
            'success' => false,
            'message' => 'Unable to send appointment request at the moment. Please call us directly at +12(025) 256 214 or try again later.',
            'error_details' => $businessResult['error'] ?? 'Unknown error'
        ]);
    }

} catch (Exception $e) {
    // Log the exception for debugging
    error_log("Appointment handler exception: " . $e->getMessage());

    echo json_encode([
        'success' => false,
        'message' => 'A server error occurred. Please try again or contact us directly at +12(025) 256 214.'
    ]);
}

/**
 * Send WhatsApp message using UltraMsg API
 */
function sendWhatsAppMessage($phoneNumber, $message)
{
    global $ULTRAMSG_TOKEN, $ULTRAMSG_API_URL;

    $postData = [
        'token' => $ULTRAMSG_TOKEN,
        'to' => $phoneNumber,
        'body' => $message,
        'priority' => '1',
        'referenceId' => uniqid('nrautomart_', true)
    ];

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $ULTRAMSG_API_URL . '/messages/chat',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($postData),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/x-www-form-urlencoded',
            'User-Agent: NR-Automart-Booking-System/1.0'
        ],
        CURLOPT_TIMEOUT => 30,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_SSL_VERIFYHOST => false,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS => 3
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);

    curl_close($ch);

    // Handle cURL errors
    if ($curlError) {
        return [
            'success' => false,
            'error' => 'Network connection error: ' . $curlError
        ];
    }

    // Handle HTTP errors
    if ($httpCode !== 200) {
        return [
            'success' => false,
            'error' => "HTTP error {$httpCode}: " . substr($response, 0, 200)
        ];
    }

    // Parse API response
    $responseData = json_decode($response, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        return [
            'success' => false,
            'error' => 'Invalid API response format'
        ];
    }

    // Check if message was sent successfully
    if (isset($responseData['sent']) && $responseData['sent'] === true) {
        return [
            'success' => true,
            'message' => 'WhatsApp message sent successfully',
            'message_id' => $responseData['id'] ?? 'unknown'
        ];
    } else {
        return [
            'success' => false,
            'error' => 'Message sending failed: ' . ($responseData['error'] ?? 'Unknown API error'),
            'api_response' => $responseData
        ];
    }
}

/**
 * Format phone number for WhatsApp API
 */
function formatPhoneNumber($phone)
{
    // Remove all non-digit characters except +
    $cleanPhone = preg_replace('/[^\d+]/', '', $phone);

    // If it doesn't start with +, assume it's a local number and add country code
    if (!str_starts_with($cleanPhone, '+')) {
        // Check if it's a Sri Lankan number (based on your business number)
        if (strlen($cleanPhone) == 10 && str_starts_with($cleanPhone, '0')) {
            // Remove leading 0 and add Sri Lankan country code
            $cleanPhone = '+94' . substr($cleanPhone, 1);
        } elseif (strlen($cleanPhone) == 9) {
            // Add Sri Lankan country code
            $cleanPhone = '+94' . $cleanPhone;
        } else {
            // For other formats, just add + if missing
            $cleanPhone = '+' . $cleanPhone;
        }
    }

    return $cleanPhone;
}

/**
 * Sanitize input data to prevent XSS and other attacks
 */
function sanitizeInput($input)
{
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate phone number format
 */
function validatePhoneNumber($phone)
{
    // Remove all non-digit characters
    $cleanPhone = preg_replace('/\D/', '', $phone);

    // Check if it's between 10-15 digits (standard phone number range)
    return strlen($cleanPhone) >= 10 && strlen($cleanPhone) <= 15;
}
?>