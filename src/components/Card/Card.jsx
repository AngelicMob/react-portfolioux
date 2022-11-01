import './_Card.scss'

const Card = (props) => {
    return(
        <div className='card-wrapper'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>
          {/* {location.pathname !== to ? (
            <Link id="link" to={to}>
              <Button inverted fill>
                Read more
              </Button>
            </Link>
          ) : (
            <Button
              inverted
              fill
              action={() =>
                document.querySelector(".top").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <BsArrowUp style={{ fontSize: "26px" }} />
            </Button>
          )} */}
        </div>
      </div>
    )
}

export default Card;