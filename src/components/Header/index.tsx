import { HeaderContainer, LogoContainer, ProfileContainer } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Grid, Link } from "@mui/material";

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
            <Link href="/">
              <h1>GAMESTORE</h1>
            </Link>
            {/* <img height={70} src="/image/Logo.png" alt="image" /> */}
          </LogoContainer>
        </Grid>
        <Grid item xs={6}>
          <ProfileContainer>
            {session && (
              <>
                <a onClick={() => signOut()}>
                  <h2>{session?.user?.email}</h2>
                </a>
              </>
            )}
            {!session && (
              <>
                <Button
                  sx={{ position: "revert", background: "#ffffff" }}
                  size="small"
                  onClick={() =>
                    signIn("credentials", {
                      username: "jsmith",
                      password: "1234",
                    })
                  }
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
