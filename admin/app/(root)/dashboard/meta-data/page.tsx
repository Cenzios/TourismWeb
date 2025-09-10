import { DashboardLayout } from "@/components/common/dashboard-layout";
import { ContactInfoForm } from "./(contact-fom)/contact-info-form";

export default function MetaDataPage() {
  return (
    <DashboardLayout>
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2">
        <ContactInfoForm />
      </div>
    </DashboardLayout>
  );
}
