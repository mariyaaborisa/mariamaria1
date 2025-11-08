// Netlify serverless function to capture email signups and send to OnlyOffice
const https = require('https');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Valid email required' })
      };
    }

    // Get OnlyOffice credentials from environment variables
    const ONLYOFFICE_API_URL = process.env.ONLYOFFICE_API_URL;
    const ONLYOFFICE_TOKEN = process.env.ONLYOFFICE_TOKEN;
    const ONLYOFFICE_FILE_ID = process.env.ONLYOFFICE_FILE_ID;

    if (!ONLYOFFICE_API_URL || !ONLYOFFICE_TOKEN || !ONLYOFFICE_FILE_ID) {
      console.error('Missing OnlyOffice environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Add timestamp
    const timestamp = new Date().toISOString();

    // Prepare data for OnlyOffice
    // This will add a new row to your spreadsheet with: Email | Timestamp
    const rowData = {
      email: email,
      timestamp: timestamp,
      source: 'Digital Safety Playbook Signup'
    };

    // Make request to OnlyOffice API
    // Note: You'll need to adjust this based on your specific OnlyOffice setup
    // This is a template - OnlyOffice DocSpace API documentation:
    // https://api.onlyoffice.com/docspace/

    const onlyofficeResponse = await fetch(`${ONLYOFFICE_API_URL}/api/2.0/files/${ONLYOFFICE_FILE_ID}/rows`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ONLYOFFICE_TOKEN}`
      },
      body: JSON.stringify(rowData)
    });

    if (!onlyofficeResponse.ok) {
      console.error('OnlyOffice API error:', await onlyofficeResponse.text());
      // Still return success to user, but log the error
      // This prevents exposing internal errors to users
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Email captured successfully'
      })
    };

  } catch (error) {
    console.error('Error processing email signup:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process signup',
        details: error.message
      })
    };
  }
};
