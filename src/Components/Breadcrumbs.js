import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  console.log(pathname)

  const crumbs = pathname.split('/')
    .filter(Boolean)
    .map((crumb, index, array) => {
      const linkTo = `/${array.slice(0, index + 1).join('/')}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={linkTo}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
