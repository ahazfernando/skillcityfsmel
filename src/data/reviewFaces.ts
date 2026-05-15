/** Headshots for review social proof (`public/peoplelogos`). */
export const REVIEW_FACE_PEOPLE = [
    { name: "Liam Carter", src: "/peoplelogos/LiamCarter.png" },
    { name: "Evelyn Taylor", src: "/peoplelogos/EvelynTaylor.png" },
    { name: "Daniel Harper", src: "/peoplelogos/DanielHarper.png" },
] as const;

export function reviewFaceByIndex(index: number) {
    return REVIEW_FACE_PEOPLE[index % REVIEW_FACE_PEOPLE.length];
}
