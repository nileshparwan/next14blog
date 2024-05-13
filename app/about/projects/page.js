import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";

const ProjectsPage = async () => {
    return (
        <div>
            <h1 className="mb-8 text-xl">
                Projects
            </h1>

            <div className="mb-8">Hello, this is the list of my repos!</div>

            <ErrorBoundary fallback={<div>Cannot fetch projects currently</div>}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div >
    );
};

export default ProjectsPage;