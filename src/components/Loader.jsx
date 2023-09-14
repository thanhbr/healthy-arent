import ClipLoader from "react-spinners/ClipLoader";

export const Loader = () => {
  return (
    <ClipLoader
        color={'red'}
        loading={true}
        cssOverride={{
          display: "block",
          margin: "40vh auto",
        }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}