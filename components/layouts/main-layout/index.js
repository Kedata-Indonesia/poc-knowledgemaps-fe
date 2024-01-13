const MainLayout = ({ children }) => {
  return (
    <main className="flex w-full pt-12 px-12 2xl:px-20 min-h-screen bg-primary">
      <div className="w-full bg-white mx-auto p-10 rounded-t-lg shadow-2xl">
        {children}
      </div>
    </main>
  );
};

const getMainLayout = () => {
  const Layout = (page) => <MainLayout>{page}</MainLayout>;
  return Layout;
};

export { getMainLayout };
