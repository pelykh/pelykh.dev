import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  onboardingForm,
  type OnboardingFormType,
  type OnboardingStep,
} from "./-app/types";
import { useAppForm } from "./-app/hooks/form";
import { onboardingFormOpts } from "./-app/components/shared-form";
import React from "react";

export const Route = createFileRoute("/experiments/tanstack-form/")({
  component: TanstackFormExperiment,
});

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em>{field.state.meta.errors.join(",")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

function TanstackFormExperiment() {
  const { t } = useTranslation();
  const [step, setStep] = React.useState<OnboardingStep>("account");

  const form = useAppForm({
    ...onboardingFormOpts,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {step === "account" && <div>AccountStep</div>}
        {step === "profile" && <div>AccountStep</div>}
        {step === "notifications" && <div>AccountStep</div>}
      </form>

      <form.AppForm>
        <form.SubscribeButton label={"Submit"} />
      </form.AppForm>
    </div>
  );
}
