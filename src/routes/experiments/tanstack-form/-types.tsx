export type OnboardingStep = "account" | "profile" | "notifications";

export type NotificationChannel = "email" | "push" | "sms";

export type OnboardingFormValues = {
  account: {
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };

  profile: {
    firstName: string;
    lastName: string;
    username: string;
    avatarUrl?: string;
    locale: "uk-UA" | "en-US";
    timeZone: string;
  };

  notifications: {
    marketing: {
      enabled: boolean;
      channels: NotificationChannel[];
    };

    productUpdates: {
      enabled: boolean;
      channels: NotificationChannel[];
    };

    security: {
      enabled: boolean;
      channels: NotificationChannel[];
    };

    muteAll: boolean;
  };
};
