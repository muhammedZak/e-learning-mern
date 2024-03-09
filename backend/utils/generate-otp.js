const bcrypt = require('bcryptjs');
const Twilio = require('twilio');

const twilioClient = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_ACCOUNT_AUTH
);

async function generateAndStoreOtp(user) {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const hashedOtp = await bcrypt.hash(otp, 12);

    user.otp = hashedOtp;
    user.otpCreatedAt = new Date();
    const savedUser = await user.save();

    await twilioClient.messages.create({
      body: `Your otp for e-leaning app is: ${otp}`,
      from: '9645019798',
      to: `+91${user.phone}`,
    });

    return { success: true };
  } catch (error) {
    console.error('Error generating and sending OTP:', error);
    return {
      success: false,
      message:
        'There was an error generating and sending OTP. Please try again later.',
    };
  }
}

module.exports = { generateAndStoreOtp };
