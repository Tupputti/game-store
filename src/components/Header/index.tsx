import { HeaderContainer, LogoContainer, ProfileContainer } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Grid } from "@mui/material";

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  const { data: session } = useSession();
  return (
    <HeaderContainer>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LogoContainer>
            <img height={70} src="/image/Logo.png" alt="image" />
          </LogoContainer>
        </Grid>
        <Grid item xs={6}>
          <ProfileContainer>
            {session && (
              <>
                {session?.user?.email}&nbsp;
                <Button
                  sx={{ position: "revert", background: "#1f1d33" }}
                  size="small"
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              </>
            )}
            {!session && (
              <>
                <Button
                  sx={{ position: "revert", background: "#1f1d33" }}
                  size="small"
                  onClick={() => signIn()}
                >
                  Sign in
                </Button>
              </>
            )}{" "}
          </ProfileContainer>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}
