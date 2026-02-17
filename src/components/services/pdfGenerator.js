import jsPDF from 'jspdf';

/**
 * Generate a PDF brochure for a specific service
 * @param {Object} currentService - The service object containing title, description, packages, etc.
 */
export const generateServiceBrochurePDF = (currentService) => {
  const doc = new jsPDF();
  
  // Set font sizes and colors
  const primaryColor = [0, 70, 226]; // Blue
  const greenColor = [40, 167, 69]; // Green
  const blackColor = [0, 0, 0];
  
  let yPosition = 20;
  
  // Header - Company Name
  doc.setFontSize(24);
  doc.setTextColor(...greenColor);
  doc.text('Green Auto Hybrid', 105, yPosition, { align: 'center' });
  
  yPosition += 10;
  doc.setFontSize(12);
  doc.setTextColor(...blackColor);
  doc.text('Kurunegala, Sri Lanka | Thalawathugoda, Sri Lanka', 105, yPosition, { align: 'center' });
  
  yPosition += 15;
  
  // Service Title
  doc.setFontSize(20);
  doc.setTextColor(...primaryColor);
  doc.text(currentService.title, 105, yPosition, { align: 'center' });
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(currentService.subtitle, 105, yPosition, { align: 'center' });
  
  yPosition += 15;
  
  // Description
  doc.setFontSize(11);
  doc.setTextColor(...blackColor);
  const descLines = doc.splitTextToSize(currentService.description, 170);
  doc.text(descLines, 20, yPosition);
  yPosition += descLines.length * 6 + 5;
  
  const desc2Lines = doc.splitTextToSize(currentService.description2, 170);
  doc.text(desc2Lines, 20, yPosition);
  yPosition += desc2Lines.length * 6 + 10;
  
  // Section Title
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text(currentService.section.title, 20, yPosition);
  yPosition += 8;
  
  doc.setFontSize(10);
  doc.setTextColor(...blackColor);
  const sectionDescLines = doc.splitTextToSize(currentService.section.description, 170);
  doc.text(sectionDescLines, 20, yPosition);
  yPosition += sectionDescLines.length * 5 + 8;
  
  // Section Items
  doc.setFontSize(10);
  currentService.section.items.forEach((item) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.text(`• ${item}`, 25, yPosition);
    yPosition += 6;
  });
  
  yPosition += 10;
  
  // Service Packages
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('Service Packages', 20, yPosition);
  yPosition += 10;
  
  doc.setFontSize(10);
  doc.setTextColor(...blackColor);
  currentService.packages.forEach((pkg) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setTextColor(...blackColor);
    doc.text(pkg.name, 25, yPosition);
    doc.setTextColor(...greenColor);
    doc.text(pkg.price, 180, yPosition, { align: 'right' });
    yPosition += 7;
  });
  
  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text('Green Auto Hybrid - Quality Service Guaranteed', 105, 287, { align: 'center' });
    doc.text(`Page ${i} of ${pageCount}`, 105, 292, { align: 'center' });
  }
  
  // Save the PDF
  doc.save(`${currentService.title.replace(/\s+/g, '_')}_Brochure.pdf`);
};

/**
 * Generate a PDF containing company details and all services
 * @param {Object} servicesData - Object containing all services data
 */
export const generateCompanyDetailsPDF = (servicesData) => {
  const doc = new jsPDF();
  
  const primaryColor = [0, 70, 226];
  const greenColor = [40, 167, 69];
  const blackColor = [0, 0, 0];
  
  let yPosition = 20;
  
  // Header
  doc.setFontSize(26);
  doc.setTextColor(...greenColor);
  doc.text('Green Auto Hybrid', 105, yPosition, { align: 'center' });
  
  yPosition += 12;
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('Expert Hybrid Vehicle Services', 105, yPosition, { align: 'center' });
  
  yPosition += 20;
  
  // About Us
  doc.setFontSize(16);
  doc.setTextColor(...primaryColor);
  doc.text('About Us', 20, yPosition);
  yPosition += 10;
  
  doc.setFontSize(11);
  doc.setTextColor(...blackColor);
  const aboutText = 'Green Auto Hybrid is your trusted partner for all hybrid vehicle services. With years of experience and certified technicians, we provide top-quality repairs, maintenance, and upgrades for hybrid vehicles.';
  const aboutLines = doc.splitTextToSize(aboutText, 170);
  doc.text(aboutLines, 20, yPosition);
  yPosition += aboutLines.length * 6 + 15;
  
  // Our Services
  doc.setFontSize(16);
  doc.setTextColor(...primaryColor);
  doc.text('Our Services', 20, yPosition);
  yPosition += 10;
  
  doc.setFontSize(11);
  doc.setTextColor(...blackColor);
  
  Object.keys(servicesData).forEach((serviceName, index) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setTextColor(...greenColor);
    doc.text(`${index + 1}. ${serviceName}`, 25, yPosition);
    yPosition += 7;
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const serviceDesc = doc.splitTextToSize(servicesData[serviceName].subtitle, 160);
    doc.text(serviceDesc, 30, yPosition);
    yPosition += serviceDesc.length * 5 + 5;
    doc.setFontSize(11);
  });
  
  // Contact Information
  if (yPosition > 240) {
    doc.addPage();
    yPosition = 20;
  } else {
    yPosition += 10;
  }
  
  doc.setFontSize(16);
  doc.setTextColor(...primaryColor);
  doc.text('Contact Information', 20, yPosition);
  yPosition += 10;
  
  doc.setFontSize(11);
  doc.setTextColor(...blackColor);
  doc.text('Locations:', 20, yPosition);
  yPosition += 7;
  doc.text('• Kurunegala, Sri Lanka', 25, yPosition);
  yPosition += 7;
  doc.text('• Thalawathugoda, Sri Lanka', 25, yPosition);
  yPosition += 12;
  
  doc.text('WhatsApp: +94 77 216 6306', 20, yPosition);
  yPosition += 7;
  doc.text('Email: info@greenautohybrid.lk', 20, yPosition);
  
  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text('Green Auto Hybrid - Expert Hybrid Vehicle Services', 105, 287, { align: 'center' });
    doc.text(`Page ${i} of ${pageCount}`, 105, 292, { align: 'center' });
  }
  
  doc.save('Green_Auto_Hybrid_Company_Details.pdf');
};
