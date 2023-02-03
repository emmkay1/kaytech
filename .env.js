const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
};

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: "9000",
  Meta_WA_accessToken: process.env.META_WA_ACCESS_TOKEN,
  Meta_WA_SenderPhoneNumberId: process.env.META_WA_SENDER_PHONE_NUMBER_ID,
  Meta_WA_wabaId: process.env.META_WA_BUSINESS_ACCOUNT_ID,
  Meta_WA_VerifyToken: process.env.META_WA_VERIFY_TOKEN,
};

const fallback = {
  ...process.env,
  NODE_ENV: undefined,
};

module.exports = (environment) => {
  console.log(`Execution environment selected is: "${environment}"`);
  if (environment === "production") {
    return production;
  } else if (environment === "development") {
    return development;
  } else {
    return fallback;
  }
};
