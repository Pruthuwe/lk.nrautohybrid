<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>NR Automart - Professional Auto Repair Services</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/NR-Logo.ico">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/vendor/plugins.min.css">
    <link rel="stylesheet" href="assets/css/style.min.css">

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

    <style>
        .appointment-btn {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
            white-space: nowrap;
            display: inline-block;
        }

        .appointment-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
            color: white;
            text-decoration: none;
        }

        .header-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .modal-header {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            border-radius: 8px 8px 0 0;
        }

        .modal-title {
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .form-control,
        .form-select {
            border-radius: 10px;
            border: 2px solid #e9ecef;
            padding: 12px 15px;
            transition: all 0.3s ease;
        }

        .form-control:focus,
        .form-select:focus {
            border-color: #ff6b35;
            box-shadow: 0 0 0 0.2rem rgba(255, 107, 53, 0.25);
        }

        .btn-submit {
            background: linear-gradient(135deg, #28a745, #20c997);
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-submit:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
            color: white;
        }

        .form-label {
            font-weight: 600;
            color: #495057;
            margin-bottom: 8px;
        }

        .modal-body {
            padding: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .required {
            color: #dc3545;
        }

        /* Loading button styles */
        .btn-loading {
            opacity: 0.7;
            pointer-events: none;
        }

        .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
            margin-right: 8px;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        /* Success message styles */
        .success-message {
            display: none;
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #c3e6cb;
            margin-bottom: 20px;
            transition: all 0.3s ease-in-out;
            opacity: 0;
            transform: translateY(-10px);
        }

        .success-message.show {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }

        /* Error message styles */
        .error-message {
            display: none;
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #f5c6cb;
            margin-bottom: 20px;
            transition: all 0.3s ease-in-out;
            opacity: 0;
            transform: translateY(-10px);
        }

        .error-message.show {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }

        /* Validation styles */
        .form-control.is-invalid,
        .form-select.is-invalid {
            border-color: #dc3545;
            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
        }

        /* Remove underlines from navigation links */
        .primary-menu .nav-menu li a,
        .nav-menu li a,
        .header-section a,
        .header-main a {
            text-decoration: none !important;
            border-bottom: none !important;
        }

        .primary-menu .nav-menu li a:hover,
        .nav-menu li a:hover,
        .header-section a:hover,
        .header-main a:hover {
            text-decoration: none !important;
            border-bottom: none !important;
        }

        /* Mobile responsive fixes */
        .header-top-btn a {
            display: inline-block;
            margin-right: 18px;
        }

        /* Menu toggle button styling */
        .menu-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 0.5px;
        }

        .menu-toggle span {
            width: 25px;
            height: 3px;
            background-color: #333;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        /* Header layout */
        .header-main-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
        }

        .header-center {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            gap: 20px;
        }

        .header-logo {
            flex-shrink: 0;
        }

        @media (max-width: 992px) {
            .appointment-btn {
                padding: 10px 18px;
                font-size: 13px;
            }

            .appointment-btn i {
                margin-right: 5px;
            }
        }

        @media (max-width: 768px) {
            .header-main-wrapper {
                flex-wrap: wrap;
                row-gap: 10px;
            }

            .header-logo {
                flex: 0 0 auto;
            }

            .header-logo img {
                max-width: 150px !important;
                height: auto !important;
                width: 150px !important;
            }

            .header-center {
                order: 3;
                width: 100%;
                justify-content: space-between;
            }

            .appointment-btn {
                flex: 1;
                padding: 10px 15px;
                font-size: 12px;
                min-width: auto;
                text-align: center;
            }

            .menu-toggle {
                flex: 0 0 auto;
                position: absolute;
                right: 0;
                top: 0;
            }

            .modal-body {
                padding: 20px;
            }

            .modal-title {
                font-size: 16px;
            }

            .modal-dialog {
                margin: 10px;
            }
        }

        @media (max-width: 576px) {
            .header-logo img {
                max-width: 120px !important;
                width: 120px !important;
                height: auto !important;
            }

            .appointment-btn {
                padding: 8px 12px;
                font-size: 11px;
                flex: 1;
            }

            .appointment-btn i {
                display: none;
            }

            .modal-body {
                padding: 15px;
            }

            .form-control,
            .form-select {
                padding: 10px 12px;
                font-size: 14px;
            }

            .form-label {
                font-size: 14px;
            }

            .menu-toggle {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    </style>

</head>

<body>

    <!-- Header Section Start -->
    <div class="section header-section">

        <!-- Header Main Start -->
        <div class="header-main">
            <div class="container">
                <div class="header-main-wrapper">
                    <!-- Header Logo Start -->
                    <div class="header-logo">
                        <a href="index.html"><img src="assets/images/NR-Logo.png" alt="NR Automart Logo" width="207"
                                height="150" style="width:207px; height:150px;">
                        </a>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Center Content -->
                    <div class="header-center">
                        <!-- Header Menu Start -->
                        <div class="primary-menu d-none d-lg-block">
                            <ul class="nav-menu">
                                <li><a href="./">Home</a></li>
                                <li><a href="./about">About Us</a></li>
                                <li><a href="./service">Services</a></li>
                                <li><a href="./contact">Contact</a></li>
                            </ul>
                        </div>
                        <!-- Header Menu End -->

                        <!-- Header Meta Start -->
                        <div class="header-meta">
                            <!-- Make Appointment Button - Desktop Only -->
                            <button class="appointment-btn d-none d-lg-inline-block" data-bs-toggle="modal" data-bs-target="#appointmentModal">
                                <i class="fas fa-calendar-plus"></i> Book Service
                            </button>
                        </div>
                        <!-- Header Meta End -->
                    </div>

                    <!-- Mobile Menu Toggle - RIGHT CORNER -->
                    <div class="header-toggle d-lg-none">
                        <button class="menu-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Main End -->

    </div>
    <!-- Header Section End -->

    <!-- Appointment Booking Modal -->
    <div class="modal fade" id="appointmentModal" tabindex="-1" aria-labelledby="appointmentModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="appointmentModalLabel">
                        <i class="fas fa-wrench"></i>
                        Book Your Auto Service Appointment
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Success Message -->
                    <div class="success-message" id="successMessage">
                        <i class="fas fa-check-circle"></i>
                        <strong>Success!</strong> Your appointment request has been sent via WhatsApp! We will contact
                        you shortly to confirm your car service appointment.
                    </div>

                    <!-- Error Message -->
                    <div class="error-message" id="errorMessage">
                        <i class="fas fa-exclamation-circle"></i>
                        <strong>Error!</strong> <span id="errorText">Something went wrong. Please try again.</span>
                    </div>

                    <form id="appointmentForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="customerName" class="form-label">Customer Name <span
                                            class="required">*</span></label>
                                    <input type="text" class="form-control" id="customerName" name="customerName"
                                        required placeholder="Enter your full name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="contactNumber" class="form-label">Contact Number <span
                                            class="required">*</span></label>
                                    <input type="tel" class="form-control" id="contactNumber" name="contactNumber"
                                        required placeholder="Enter your phone number">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="appointmentDate" class="form-label">Preferred Date <span
                                            class="required">*</span></label>
                                    <input type="date" class="form-control" id="appointmentDate" name="appointmentDate"
                                        required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="appointmentTime" class="form-label">Preferred Time <span
                                            class="required">*</span></label>
                                    <select class="form-select" id="appointmentTime" name="appointmentTime" required>
                                        <option value="">Select Time</option>
                                        <option value="08:00">08:00 AM</option>
                                        <option value="08:30">08:30 AM</option>
                                        <option value="09:00">09:00 AM</option>
                                        <option value="09:30">09:30 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="10:30">10:30 AM</option>
                                        <option value="11:00">11:00 AM</option>
                                        <option value="11:30">11:30 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="12:30">12:30 PM</option>
                                        <option value="13:00">01:00 PM</option>
                                        <option value="13:30">01:30 PM</option>
                                        <option value="14:00">02:00 PM</option>
                                        <option value="14:30">02:30 PM</option>
                                        <option value="15:00">03:00 PM</option>
                                        <option value="15:30">03:30 PM</option>
                                        <option value="16:00">04:00 PM</option>
                                        <option value="16:30">04:30 PM</option>
                                        <option value="17:00">05:00 PM</option>
                                        <option value="17:30">05:30 PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="vehicleBrand" class="form-label">Vehicle Brand <span
                                            class="required">*</span></label>
                                    <select class="form-select" id="vehicleBrand" name="vehicleBrand" required>
                                        <option value="">Select Vehicle Brand</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Chevrolet">Chevrolet</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                                        <option value="Audi">Audi</option>
                                        <option value="Volkswagen">Volkswagen</option>
                                        <option value="Nissan">Nissan</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="Kia">Kia</option>
                                        <option value="Mazda">Mazda</option>
                                        <option value="Subaru">Subaru</option>
                                        <option value="Lexus">Lexus</option>
                                        <option value="Infiniti">Infiniti</option>
                                        <option value="Acura">Acura</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="vehicleType" class="form-label">Vehicle Model <span
                                            class="required">*</span></label>
                                    <input type="text" class="form-control" id="vehicleType" name="vehicleType" required
                                        placeholder="e.g., Prius, Camry, Civic">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="serviceType" class="form-label">Service Type</label>
                            <select class="form-select" id="serviceType" name="serviceType">
                                <option value="">Select Service Type</option>
                                <option value="General Maintenance">General Maintenance</option>
                                <option value="Oil Change">Oil Change</option>
                                <option value="Brake Service">Brake Service</option>
                                <option value="Tire Service">Tire Service</option>
                                <option value="Engine Repair">Engine Repair</option>
                                <option value="Transmission Service">Transmission Service</option>
                                <option value="Air Conditioning">Air Conditioning</option>
                                <option value="Battery Service">Battery Service</option>
                                <option value="Diagnostic">Diagnostic</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="additionalNotes" class="form-label">Additional Notes</label>
                            <textarea class="form-control" id="additionalNotes" name="additionalNotes" rows="3"
                                placeholder="Please describe any specific issues or requirements..."></textarea>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-submit" id="submitBtn">
                                <i class="fas fa-paper-plane"></i> Send via WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Start -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">
        <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <!-- Mobile Appointment Button -->
            <button class="appointment-btn w-100 mb-3" data-bs-toggle="modal" data-bs-target="#appointmentModal" data-bs-dismiss="offcanvas">
                <i class="fas fa-calendar-plus"></i> Book Service
            </button>

            <hr class="my-2">

            <div class="mobile-menu-items">
                <ul class="nav-menu">
                    <li><a href="./">Home</a></li>
                    <li><a href="./about">About Us</a></li>
                    <li><a href="./service">Services</a></li>
                    <li><a href="./contact">Contact</a></li>
                </ul>
            </div>

            <hr class="my-3">

            
            
        </div>
    </div>
    <!-- Mobile Menu End -->

    <!-- Bootstrap 5 JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

    <script>
        // Set minimum date to today
        document.addEventListener('DOMContentLoaded', function () {
            const dateInput = document.getElementById('appointmentDate');
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);

            // Auto-format phone number
            const phoneInput = document.getElementById('contactNumber');
            phoneInput.addEventListener('input', function (e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    if (value.length <= 3) {
                        value = value;
                    } else if (value.length <= 6) {
                        value = value.substring(0, 3) + '-' + value.substring(3);
                    } else {
                        value = value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6, 10);
                    }
                }
                e.target.value = value;
            });
        });

        // Form submission handler
        document.getElementById('appointmentForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous messages
            hideMessages();

            // Validate form
            if (!validateForm()) {
                return;
            }

            // Get form data
            const formData = new FormData(this);

            // Show loading state
            showLoadingState();

            // Send to your WhatsApp appointment handler PHP file
            fetch('appointment_handler.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    hideLoadingState();

                    if (data.success) {
                        showSuccessMessage(data.message);
                        // Reset form after successful submission
                        setTimeout(() => {
                            document.getElementById('appointmentForm').reset();
                            // Close modal after 4 seconds
                            setTimeout(() => {
                                const modal = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
                                modal.hide();
                            }, 4000);
                        }, 1000);
                    } else {
                        showErrorMessage(data.message);
                    }
                })
                .catch(error => {
                    hideLoadingState();
                    console.error('Error:', error);
                    showErrorMessage('Network error occurred. Please check your connection and try again, or call us directly at +12(025) 256 214.');
                });
        });

        function validateForm() {
            let isValid = true;
            const requiredFields = [
                'customerName',
                'contactNumber',
                'appointmentDate',
                'appointmentTime',
                'vehicleBrand',
                'vehicleType'
            ];

            // Remove existing validation classes
            document.querySelectorAll('.form-control, .form-select').forEach(field => {
                field.classList.remove('is-invalid');
            });

            // Validate required fields
            requiredFields.forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (!field.value.trim()) {
                    field.classList.add('is-invalid');
                    isValid = false;
                }
            });

            // Validate phone number format
            const phoneField = document.getElementById('contactNumber');
            const phoneValue = phoneField.value.replace(/\D/g, '');
            if (phoneValue.length < 10) {
                phoneField.classList.add('is-invalid');
                isValid = false;
                if (phoneValue.length > 0) {
                    showErrorMessage('Please enter a valid phone number (at least 10 digits)');
                }
            }

            // Validate date
            const dateField = document.getElementById('appointmentDate');
            const selectedDate = new Date(dateField.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                dateField.classList.add('is-invalid');
                showErrorMessage('Please select a future date for your appointment');
                isValid = false;
            }

            if (!isValid && document.querySelectorAll('.form-control.is-invalid, .form-select.is-invalid').length > 0) {
                showErrorMessage('Please fill in all required fields correctly');
            }

            return isValid;
        }

        function showLoadingState() {
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading-spinner"></span>Sending to WhatsApp...';
            submitBtn.classList.add('btn-loading');
            submitBtn.setAttribute('data-original-text', originalText);
        }

        function hideLoadingState() {
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.getAttribute('data-original-text');
            if (originalText) {
                submitBtn.innerHTML = originalText;
            }
            submitBtn.classList.remove('btn-loading');
            submitBtn.removeAttribute('data-original-text');
        }

        function showSuccessMessage(message) {
            const successDiv = document.getElementById('successMessage');
            successDiv.innerHTML = '<i class="fas fa-check-circle"></i><strong>Success!</strong> ' + message;
            successDiv.classList.add('show');
        }

        function showErrorMessage(message) {
            const errorDiv = document.getElementById('errorMessage');
            const errorText = document.getElementById('errorText');
            errorText.textContent = message;
            errorDiv.classList.add('show');
        }

        function hideMessages() {
            document.getElementById('successMessage').classList.remove('show');
            document.getElementById('errorMessage').classList.remove('show');
        }

        // Clear messages when modal is closed
        document.getElementById('appointmentModal').addEventListener('hidden.bs.modal', function () {
            hideMessages();
            document.getElementById('appointmentForm').reset();
            // Clear validation classes
            document.querySelectorAll('.form-control, .form-select').forEach(field => {
                field.classList.remove('is-invalid');
            });
        });

        // Auto-hide messages after 8 seconds
        function autoHideMessages() {
            setTimeout(() => {
                hideMessages();
            }, 8000);
        }

        // Call auto-hide when messages are shown
        document.getElementById('appointmentForm').addEventListener('submit', function () {
            setTimeout(autoHideMessages, 100);
        });
    </script>

</body>

</html>