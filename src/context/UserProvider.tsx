import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IDecodedUser } from "../types";
import { getCurrentUser } from "../services/authService";
interface IUserProviderValues {
  user: IDecodedUser | null;
  isLoading: boolean;
  setUser: (user: null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContext = createContext<IUserProviderValues | undefined>(undefined);
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IDecodedUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
