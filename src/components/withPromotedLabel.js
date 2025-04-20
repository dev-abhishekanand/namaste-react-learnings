const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    const { resData } = props;
    const isPromoted = resData?.avgRating <= 4.2;

    return (
      <div>
        {isPromoted && (
          <>
            <label className="absolute bg-yellow-300 m-2 p-2 rounded-lg ">
              Promoted
            </label>
          </>
        )}
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default withPromotedLabel;
