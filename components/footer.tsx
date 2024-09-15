import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <blockquote className="mb-6 border-l-2 pl-6 italic text-sm">
        Dislcaimer <br /> I have no affiliation with vidsrc. This site is just a
        fun project to redirect you to their API. This site is not monetized and
        I do not own any of the content. All rights belong to their respective
        owners.
      </blockquote>
      <span className="text-sm">
        &copy;&nbsp;&nbsp;Syaamil Fa&apos;iq &#x2022;
        2024&nbsp;&#x2022;&nbsp;API powered by&nbsp;
        <Link href="https://vidsrc.domains" className="underline">
          vidsrc
        </Link>
      </span>
    </div>
  );
}
