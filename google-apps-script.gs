const RECIPIENT_EMAIL = 'iamfaysal.talukder@gmail.com';

function doPost(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};

    const name = String(params.name || '').trim();
    const email = String(params.email || '').trim();
    const service = String(params.service || '').trim();
    const message = String(params.message || '').trim();

    if (!name || !email || !message) {
      return jsonResponse({ success: false, error: 'Missing required form fields.' });
    }

    const subject = 'New Project Enquiry — ' + (service || 'Faysal Digital');

    const htmlBody = [
      '<h2>New Project Enquiry</h2>',
      '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>',
      '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>',
      '<p><strong>Service:</strong> ' + escapeHtml(service || 'Not specified') + '</p>',
      '<p><strong>Project details:</strong></p>',
      '<p>' + escapeHtml(message).replace(/\n/g, '<br>') + '</p>',
      '<hr>',
      '<p><small>Sent from the Faysal Digital website contact form.</small></p>'
    ].join('');

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      body:
        'New Project Enquiry\n\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Service: ' + (service || 'Not specified') + '\n\n' +
        'Project details:\n' + message,
      replyTo: email,
      name: 'Faysal Digital Website'
    });

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, error: String(error) });
  }
}

function doGet() {
  return jsonResponse({ success: true, message: 'Faysal Digital form endpoint is active.' });
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
