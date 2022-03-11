import React from "react";
import { Button } from "../../components";
import localData from "../../localData";

export default function Home() {
    const { telegram, trash } = localData.unsubscribe;

    const test = ()=>{
        console.log('test')
    }

    return (
        <main>
            <section className="portfolio">
                <div className="container">
                    <h2 className="example-title">home page section</h2>
                        <Button className="btn-primary m-2">
                            primary
                            <span className="endIcon">{telegram}</span>
                        </Button>
                      
                </div>
            </section>
        </main>
    );
}
