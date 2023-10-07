import { Grid, Stack } from "@mui/joy";
import LeftMenu from "./Layout/menuSection";
const headerStyles = {
    headerBg : {


    }

}
export default function Header(){
    return(<>
        <Stack direction = "row" justifyContent="space-between" alignItems="flex-start"spacing={1} style = {headerStyles.headerBg}>
        <Grid container>
            <Grid item>
                {/* Contains Logo */}
                Logo
            </Grid>
        </Grid>

        <Grid container>
            <Grid item>
                {/* Contains Logo */}
                <LeftMenu/>
            </Grid>
        </Grid>
        </Stack>
    </>)
    
}