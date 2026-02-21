import { type } from "arktype";

export type OnboardingStep = "account" | "profile" | "notifications";

export const notificationChannel = type("'email' | 'push' | 'sms'");

export const onboardingForm = type({
  account: {
    email: "string",
    password: "string",
    confirmPassword: "string",
    acceptTerms: "string",
  },
  profile: {
    firstName: "string",
    lastName: "string",
    username: "string",
    "avatarUrl?": "string",
    locale: "'uk-UA' | 'en-US'",
    timeZone: "string",
  },
  notifications: {
    marketing: {
      enabled: "boolean",
      channels: notificationChannel.array(),
    },
    productUpdates: {
      enabled: "boolean",
      channels: notificationChannel.array(),
    },
    security: {
      enabled: "boolean",
      channels: notificationChannel.array(),
    },
    muteAll: "boolean",
  },
});

export type OnboardingFormType = typeof onboardingForm.infer;
