import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { useAppForm } from "@/hooks/demo.form";

export const Route = createFileRoute("/demo/form/simple")({
	component: SimpleForm,
});

function SimpleForm() {
	const { t } = useTranslation();

	const schema = z.object({
		title: z.string().min(1, t("simpleForm.title")),
		description: z.string().min(1, t("simpleForm.description")),
	});

	const form = useAppForm({
		defaultValues: {
			title: "",
			description: "",
		},
		validators: {
			onBlur: schema,
		},
		onSubmit: ({ value }) => {
			console.log(value);
			alert(t("simpleForm.submitSuccess"));
		},
	});

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 text-white"
			style={{
				backgroundImage:
					"radial-gradient(50% 50% at 5% 40%, #add8e6 0%, #0000ff 70%, #00008b 100%)",
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
					<form.AppField name="title">
						{(field) => (
							<field.TextField label={t("simpleForm.title")} />
						)}
					</form.AppField>

					<form.AppField name="description">
						{(field) => (
							<field.TextArea
								label={t("simpleForm.description")}
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
