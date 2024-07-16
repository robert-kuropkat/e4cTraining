import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));  //delay to see working timer
    const response = await fetch( `https://api.github.com/repos/robert-kuropkat/${name}/contents`
                                , { next: { revalidate: 60 }} );
    const repo = await response.json();
    return repo;
}

const RepoDirs = async ({name}) => {
    const content = await fetchRepoContents(name);
    const dirs = content.filter((content) => content.type === 'dir');

  return (
    <div>
        <h3>Directories</h3>
        <ul>
            { dirs.map( (dir) => (
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RepoDirs