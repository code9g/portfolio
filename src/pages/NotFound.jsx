import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-full max-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl text-red-400">404</h1>
      <p className="text-xl text-neutral-300">
        Oups ! Nous n&apos;avons pas pu trouver cette ressource !
      </p>
      <Link className="" to="/">
        Acceuil
      </Link>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
