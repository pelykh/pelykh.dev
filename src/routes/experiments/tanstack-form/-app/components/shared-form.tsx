import { formOptions } from "@tanstack/react-form";
import {
  onboardingForm,
  type OnboardingFormType,
  type OnboardingStep,
} from "../types";

const defaultValues: OnboardingFormType = {
  account: {
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
  },
  profile: {
    firstName: "",
    lastName: "",
    username: "",
    locale: "uk-UA",
    timeZone: "en-US",
  },
  notifications: {
    marketing: {
      enabled: true,
      channels: [],
    },
    productUpdates: {
      enabled: true,
      channels: [],
    },
    security: {
      enabled: true,
      channels: [],
    },
    muteAll: false,
  },
};

export const getOnboardingFormOpts = (step: OnboardingStep) =>
  formOptions({
    defaultValues: defaultValues,
    validators: {
      onChange: onboardingForm,
    },
  });
