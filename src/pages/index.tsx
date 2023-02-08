import { Fragment } from "react";
import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

interface Props {
  session: any;
}

export default function Home({ session }: Props) {
  const data = useSession();
  console.log(data);
  return (
    <>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Dashbord
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl pt-7 sm:px-6 lg:px-8">
            <SectionHeading title="Læreplaner" />
            <Laereplan />
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: {},
    };
  }
  return {
    props: {
      session,
    },
  };
};

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h2 className="text-lg font-medium leading-6 text-gray-900">{title}</h2>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Invite
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

const Laereplan = () => {
  return (
    <div className="flex flex-col">
      <div className="min-h-24 mt-8 rounded-md bg-indigo-600 px-8 py-10">
        <h3 className="text-xl text-white">Title</h3>
        <p className="pt-2 text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
