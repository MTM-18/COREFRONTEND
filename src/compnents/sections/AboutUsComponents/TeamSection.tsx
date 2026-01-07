import { useTranslation } from "react-i18next";

import abdulrahmanImg from "../../../assets/team/abdulrahman.webp";
import muhammedImg from "../../../assets/team/mohammed.webp";
import abdullahImg from "../../../assets/team/abdullah.webp";
import albaraaImg from "../../../assets/team/braa.webp";
import laraImg from "../../../assets/team/lara.webp";
import omarImg from "../../../assets/team/omar.webp";
import habibaImg from "../../../assets/team/habiba.webp";
import hamzaImg from "../../../assets/team/hamza.webp";
import karamImg from "../../../assets/team/karam.webp";
import nazirImg from "../../../assets/team/Nazire.webp";

type TeamMember = {
    id: string;
    image: string;
    nameKey: string;
    roleKey: string;
};

const TEAM: TeamMember[] = [
    {
        id: "abdulrahman",
        image: abdulrahmanImg,
        nameKey: "aboutPage.team.abdulrahman.name",
        roleKey: "aboutPage.team.abdulrahman.role",
    },
    {
        id: "muhammed",
        image: muhammedImg,
        nameKey: "aboutPage.team.muhammed.name",
        roleKey: "aboutPage.team.muhammed.role",
    },

    {
        id: "abdullah",
        image: abdullahImg,
        nameKey: "aboutPage.team.abdullah.name",
        roleKey: "aboutPage.team.abdullah.role",
    },
    {
        id: "albaraa",
        image: albaraaImg,
        nameKey: "aboutPage.team.albaraa.name",
        roleKey: "aboutPage.team.albaraa.role",
    },

    {
        id: "lara",
        image: laraImg,
        nameKey: "aboutPage.team.lara.name",
        roleKey: "aboutPage.team.lara.role",
    },
    {
        id: "omar",
        image: omarImg,
        nameKey: "aboutPage.team.omar.name",
        roleKey: "aboutPage.team.omar.role",
    },
    {
        id: "habiba",
        image: habibaImg,
        nameKey: "aboutPage.team.habiba.name",
        roleKey: "aboutPage.team.habiba.role",
    },


    {
        id: "hamza",
        image: hamzaImg,
        nameKey: "aboutPage.team.hamza.name",
        roleKey: "aboutPage.team.hamza.role",
    },
    {
        id: "karam",
        image: karamImg,
        nameKey: "aboutPage.team.karam.name",
        roleKey: "aboutPage.team.karam.role",
    },
    {
        id: "nazir",
        image: nazirImg,
        nameKey: "aboutPage.team.nazir.name",
        roleKey: "aboutPage.team.nazir.role",
    },
];

export default function TeamSection() {
    const { t } = useTranslation();

    return (
        <section className=" py-10 md:py-10">
            <div className="layout-shell  mx-auto space-y-10">

                {/* Heading */}
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("aboutPage.team.title")}
                    </h2>

                    <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight max-w-xl">
                        {t("aboutPage.team.subtitle")}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {TEAM.map((member) => (
                        <article key={member.id} className="card-surface overflow-hidden">
                            <img
                                src={member.image}
                                alt={t(member.nameKey)}
                                className="w-full h-64 object-cover"
                            />

                            {/* Name + Role */}
                            <div className="p-4 space-y-1 bg-core-lightBg dark:bg-core-darkBg">
                                <div className="font-semibold text-sm text-core-textDark dark:text-core-textLight">
                                    {t(member.nameKey)}
                                </div>
                                <div className="text-xs text-core-textMuted">
                                    {t(member.roleKey)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
