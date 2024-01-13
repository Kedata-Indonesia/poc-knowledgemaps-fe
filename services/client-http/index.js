import ky from "ky";

const clientHttp = () => {
  const http = ky.create({
    prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
  });

  return http;
};

export default clientHttp;
