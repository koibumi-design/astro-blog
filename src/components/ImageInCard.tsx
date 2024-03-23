import {type Component, Show} from "solid-js";
import styles from "./ImageInCard.module.scss";
import { Typo } from "@koibumi-design/solidjs";

interface ImageInCard {
    linkTo: string;
    title: string;
    image?: string | undefined;
}

export const ImageInCard: Component<ImageInCard> = (props) => {
    return (
        <div
            class={styles['img-container']}
            onClick={() => {
                console.log(window)
                window.open(props.linkTo, "_blank")
            }}
        >
            <Show
                when={props.image !== undefined}
                fallback={
                    <Typo variant="h4" emphasis>
                        {props.title}
                    </Typo>
                }
            >
                <img src={props.image} alt={props.title} />
            </Show>
        </div>

    )
}