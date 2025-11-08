# OnlyOffice Email Capture Setup Guide

This guide will help you connect your email signup form to OnlyOffice DocSpace so all signups are securely stored in your spreadsheet.

## Architecture Overview

```
[User fills form] → [Netlify Function] → [OnlyOffice API] → [Your Spreadsheet]
```

## Step 1: Get OnlyOffice API Credentials

### 1.1 Create/Open Your Spreadsheet
1. Go to your OnlyOffice DocSpace: https://docspace-f9eowt.onlyoffice.com
2. Create a new spreadsheet or open an existing one
3. Set up columns:
   - Column A: Email
   - Column B: Timestamp
   - Column C: Source

### 1.2 Get Your API Token
1. In OnlyOffice DocSpace, click your profile (top right)
2. Go to **Settings** → **Developer Tools** or **API**
3. Generate a new API token
4. Copy and save this token securely - you'll need it later

### 1.3 Get Your File ID
Option A: From URL
- Open your spreadsheet in OnlyOffice
- Look at the URL - it contains the file ID
- Example: `https://docspace-f9eowt.onlyoffice.com/products/files/#123456`
- The file ID is `123456`

Option B: Via API Explorer
- Use the OnlyOffice API explorer to list your files
- Find your spreadsheet and copy its ID

## Step 2: Deploy to Netlify

### 2.1 Sign Up for Netlify
1. Go to https://netlify.com
2. Click "Sign up" and choose "Sign up with GitHub"
3. Authorize Netlify to access your GitHub account

### 2.2 Import Your Repository
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Find and select your `mariamaria1` repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (just a period)
5. Click "Deploy site"

### 2.3 Add Environment Variables
1. In your Netlify site dashboard, go to **Site settings** → **Environment variables**
2. Click "Add a variable" for each of these:

   **Variable 1:**
   - Key: `ONLYOFFICE_API_URL`
   - Value: `https://docspace-f9eowt.onlyoffice.com`

   **Variable 2:**
   - Key: `ONLYOFFICE_TOKEN`
   - Value: [Your API token from Step 1.2]

   **Variable 3:**
   - Key: `ONLYOFFICE_FILE_ID`
   - Value: [Your file/spreadsheet ID from Step 1.3]

3. Click "Save"

### 2.4 Redeploy
1. Go to **Deploys** tab
2. Click "Trigger deploy" → "Deploy site"
3. Wait for deployment to complete (usually 1-2 minutes)

## Step 3: Test Your Form

1. Visit your new Netlify URL (it will look like: `https://your-site-name.netlify.app`)
2. Navigate to the Offerings page
3. Enter a test email address in the "Digital Safety Playbook" form
4. Click "Send It My Way"
5. Check your OnlyOffice spreadsheet - you should see a new row with the email and timestamp!

## Troubleshooting

### Form submits but email doesn't appear in OnlyOffice
1. Check Netlify function logs:
   - Go to your Netlify dashboard
   - Click **Functions** tab
   - Find `submit-email` and check recent logs
2. Verify your environment variables are correct
3. Make sure your OnlyOffice API token has permission to edit the spreadsheet

### "Server configuration error" message
- This means one or more environment variables are missing
- Double-check all three variables are set in Netlify

### Form shows error message
- Check browser console (F12 → Console tab) for error details
- Verify the Netlify function deployed successfully

## Next Steps

### Customize the OnlyOffice Integration
The serverless function is at `netlify/functions/submit-email.js`. You can modify it to:
- Add more fields (name, organization, etc.)
- Send confirmation emails
- Integrate with other services
- Add spam protection

### Set Up Custom Domain
1. In Netlify dashboard, go to **Domain settings**
2. Click "Add custom domain"
3. Follow instructions to point your domain to Netlify

## Security Notes

- ✅ API credentials are stored securely in Netlify environment variables
- ✅ Never commit `.env` file to git (it's in `.gitignore`)
- ✅ The serverless function runs on Netlify's servers, not in the browser
- ✅ Users never see your OnlyOffice credentials

## Support

If you run into issues:
1. Check Netlify function logs for error messages
2. Review OnlyOffice API documentation: https://api.onlyoffice.com/docspace/
3. Verify your API token hasn't expired

---

**Current Status:**
- ✅ Netlify configuration created (`netlify.toml`)
- ✅ Serverless function created (`netlify/functions/submit-email.js`)
- ✅ Form updated to call serverless function
- ⏳ Waiting for: OnlyOffice API credentials and Netlify deployment
