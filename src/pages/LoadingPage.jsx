import { CircularProgress } from "@mui/material"
import { PageLayout } from "../layout/PageLayout"
import { FlexBox } from "../theme/purpleTheme"


export const LoadingPage = () => {
  return (
    <PageLayout>
        <FlexBox sx={{width:'100vw', height:'100vh'}}>
            <CircularProgress size={55} sx={{color:'primary.white'}}/>
        </FlexBox>
    </PageLayout>
  )
}
