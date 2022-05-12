
/*
 * External Link is an easy way to ensure that all external links have the same styling and open in a new tab rather than
 * redirecting from current
 */
let ExternalLink = (props) => {
    return (
        <a href={props.href} target={"_blank"} rel={"noreferrer"} className="externalLink">
            {props.content}
        </a>
    );
}


export default ExternalLink
