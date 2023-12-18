import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { MemberDataContextType, Member } from "../../types/user";

export const MemberDataContext = createContext<MemberDataContextType | null>(null);

export function useMemberData() {
  const context = useContext(MemberDataContext);

  if (!context) {
    throw new Error("useMemberData must be used within a MemberDataContext Provider");
  }

  const { verifiedMemberData, setVerifiedMemberData } = context;

  return { verifiedMemberData, setVerifiedMemberData } as const;
}
