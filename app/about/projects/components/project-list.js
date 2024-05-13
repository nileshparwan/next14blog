import Card from "@/components/card";

const ProjectList = async () => {
    const response = await fetch(
        'http://localhost:3001/repos'
        // { cache: 'no-store' }
    );
    const repos = await response.json();

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                repos.map(repo => (
                    <li key={repo.id} className="mb-2">
                        <Card className="font-mono h-full">
                            <div className="flex justify-between mb-4">
                                <div className="font-semibold">{repo.title}</div>
                                <div>⭐️ {repo.stargazers_count}</div>
                            </div>
                            <div>{repo.description}</div>
                        </Card>
                    </li>
                ))
            }
        </ul>
    );
};

export default ProjectList;