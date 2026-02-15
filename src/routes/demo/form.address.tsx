import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { useAppForm } from "@/hooks/demo.form";

export const Route = createFileRoute("/demo/form/address")({
	component: AddressForm,
});

function AddressForm() {
	const { t } = useTranslation();

	const form = useAppForm({
		defaultValues: {
			fullName: "",
			email: "",
			address: {
				street: "",
				city: "",
				state: "",
				zipCode: "",
				country: "",
			},
			phone: "",
		},
		validators: {
			onBlur: ({ value }) => {
				const errors = {
					fields: {},
				} as {
					fields: Record<string, string>;
				};
				if (value.fullName.trim().length === 0) {
					errors.fields.fullName = t(
						"addressForm.validation.fullNameRequired",
					);
				}
				return errors;
			},
		},
		onSubmit: ({ value }) => {
			console.log(value);
			alert(t("addressForm.submitSuccess"));
		},
	});

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 text-white"
			style={{
				backgroundImage:
					"radial-gradient(50% 50% at 5% 40%, #f4a460 0%, #8b4513 70%, #1a0f0a 100%)",
			}}
		>
			<div className="w-full max-w-2xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
					className="space-y-6"
				>
					<form.AppField name="fullName">
						{(field) => (
							<field.TextField
								label={t("addressForm.fullName")}
							/>
						)}
					</form.AppField>

					<form.AppField
						name="email"
						validators={{
							onBlur: ({ value }) => {
								if (!value || value.trim().length === 0) {
									return t(
										"addressForm.validation.emailRequired",
									);
								}
								if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
										value,
									)
								) {
									return t(
										"addressForm.validation.emailInvalid",
									);
								}
								return undefined;
							},
						}}
					>
						{(field) => (
							<field.TextField label={t("addressForm.email")} />
						)}
					</form.AppField>

					<form.AppField
						name="address.street"
						validators={{
							onBlur: ({ value }) => {
								if (!value || value.trim().length === 0) {
									return t(
										"addressForm.validation.streetRequired",
									);
								}
								return undefined;
							},
						}}
					>
						{(field) => (
							<field.TextField
								label={t("addressForm.streetAddress")}
							/>
						)}
					</form.AppField>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<form.AppField
							name="address.city"
							validators={{
								onBlur: ({ value }) => {
									if (!value || value.trim().length === 0) {
										return t(
											"addressForm.validation.cityRequired",
										);
									}
									return undefined;
								},
							}}
						>
							{(field) => (
								<field.TextField
									label={t("addressForm.city")}
								/>
							)}
						</form.AppField>
						<form.AppField
							name="address.state"
							validators={{
								onBlur: ({ value }) => {
									if (!value || value.trim().length === 0) {
										return t(
											"addressForm.validation.stateRequired",
										);
									}
									return undefined;
								},
							}}
						>
							{(field) => (
								<field.TextField
									label={t("addressForm.state")}
								/>
							)}
						</form.AppField>
						<form.AppField
							name="address.zipCode"
							validators={{
								onBlur: ({ value }) => {
									if (!value || value.trim().length === 0) {
										return t(
											"addressForm.validation.zipCodeRequired",
										);
									}
									if (!/^\d{5}(-\d{4})?$/.test(value)) {
										return t(
											"addressForm.validation.zipCodeInvalid",
										);
									}
									return undefined;
								},
							}}
						>
							{(field) => (
								<field.TextField
									label={t("addressForm.zipCode")}
								/>
							)}
						</form.AppField>
					</div>

					<form.AppField
						name="address.country"
						validators={{
							onBlur: ({ value }) => {
								if (!value || value.trim().length === 0) {
									return t(
										"addressForm.validation.countryRequired",
									);
								}
								return undefined;
							},
						}}
					>
						{(field) => (
							<field.Select
								label={t("addressForm.country")}
								values={[
									{
										label: t("addressForm.countries.US"),
										value: "US",
									},
									{
										label: t("addressForm.countries.CA"),
										value: "CA",
									},
									{
										label: t("addressForm.countries.UK"),
										value: "UK",
									},
									{
										label: t("addressForm.countries.AU"),
										value: "AU",
									},
									{
										label: t("addressForm.countries.DE"),
										value: "DE",
									},
									{
										label: t("addressForm.countries.FR"),
										value: "FR",
									},
									{
										label: t("addressForm.countries.JP"),
										value: "JP",
									},
								]}
								placeholder={t("addressForm.selectCountry")}
							/>
						)}
					</form.AppField>

					<form.AppField
						name="phone"
						validators={{
							onBlur: ({ value }) => {
								if (!value || value.trim().length === 0) {
									return t(
										"addressForm.validation.phoneRequired",
									);
								}
								if (
									!/^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
										value,
									)
								) {
									return t(
										"addressForm.validation.phoneInvalid",
									);
								}
								return undefined;
							},
						}}
					>
						{(field) => (
							<field.TextField
								label={t("addressForm.phone")}
								placeholder={t("addressForm.phonePlaceholder")}
							/>
						)}
					</form.AppField>

					<div className="flex justify-end">
						<form.AppForm>
							<form.SubscribeButton
								label={t("common.submit")}
							/>
						</form.AppForm>
					</div>
				</form>
			</div>
		</div>
	);
}
