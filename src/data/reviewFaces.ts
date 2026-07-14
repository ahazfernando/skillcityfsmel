/** Headshots for review social proof (`public/peoplelogos`). */
export const REVIEW_FACE_PEOPLE = [
  { name: "Liam Carter", src: "/peoplelogos/LiamCarter.jpeg" },
  { name: "Evelyn Taylor", src: "/peoplelogos/EvelynTaylor.png" },
  { name: "Daniel Harper", src: "/peoplelogos/DanielHarper.jpeg" },
] as const;

export function reviewFaceByIndex(index: number) {
  return REVIEW_FACE_PEOPLE[index % REVIEW_FACE_PEOPLE.length];
}
