import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/layout/Spinner";
import { selectProfile, selectIsLoading } from "store/profile/selectors";
import { getProfile } from "store/profile/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfile);
  const isLoading = useSelector(selectIsLoading);

  console.log(profile);
  console.log(isLoading);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return <div>{isLoading || !profile ? <Spinner /> : <h1>Dashboard</h1>}</div>;
};

export default Dashboard;
