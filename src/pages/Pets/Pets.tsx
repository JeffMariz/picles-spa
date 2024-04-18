import { Link } from "react-router-dom"
import { Header } from "../../components/common/Header"
import { Grid } from "../../components/layout/Grid"
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card"
import { skeleton } from "../../components/common/Skeleton"
import Skeleton from "react-loading-skeleton"

export function Pets(){
    return(
    <Grid>
    <div className={styles.container}>
    <Header/>
    <main className={styles.list}>
        <Skeleton count={5} containerClassName={styles.skeleton} />
        <Card href="/pets/1" text="nina" thumb=""/>
        <Card href="/pets/2" text="bob" thumb=""/>
        <Card href="/pets/3" text="jão" thumb=""/>
    </main>
    </div>
    </Grid>)
}