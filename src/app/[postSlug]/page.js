import MaintainPage from "@/components/MaintainPage";

export default function Page({ params }) {
    const { postSlug } = params
    return (
        <MaintainPage pageName={ postSlug } />
    );
}