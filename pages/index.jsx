import Link from "next/link";

function Index() {
  return (
    <>
      <aside className="archive-card">
        <h4>#HealthHackKiel Archive</h4>
        <p>
          Searching for the first prototype from #HealthHackKiel? We archived it{" "}
          <Link href="/healthhackkiel">here</Link> for the time we work on a new
          version of Kladderadatsch.
        </p>
      </aside>

      <style jsx>{`
        .archive-card {
          padding: 16px;
          border-width: 2px;
          border-radius: 8px;
          border-color: var(--text-color);
        }
      `}</style>
    </>
  );
}

export default Index;
