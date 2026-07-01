/** Headshots for review social proof (`public/realestate`). */
export const REVIEW_FACE_PEOPLE = [
  { name: "James Mitchell", src: "/realestate/Man_wearing_formal_wear_smiling_202607011116.jpeg" },
  { name: "Sarah Thompson", src: "/realestate/Australian_woman_looking_confident_202607011118.jpeg" },
  { name: "Michael Chen", src: "/realestate/dbe9a0eee5b239421c5fcd05ee9e3ea5.webp" },
] as const;

export function reviewFaceByIndex(index: number) {
  return REVIEW_FACE_PEOPLE[index % REVIEW_FACE_PEOPLE.length];
}
