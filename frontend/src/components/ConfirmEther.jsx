import { ethers } from "ethers";

const ConfirmEther = ({
  recipientsData,
  total,
  tokenBalance,
  remaining,
  disperse,
  isDisperseSuccessful,
}) => {
  return (
    <div className="pt-16">
      <h3 className="text-2xl font-light italic">confirm</h3>
      <ul>
        <li>
          <div className="flex justify-between mt-4">
            <p className="italic">address</p>
            <p className="italic">amount</p>
          </div>
        </li>
        {recipientsData.length > 0 &&
          recipientsData.map((recipient) => (
            <li>
              <div className="flex justify-between mt-2">
                <p>{recipient.address}</p>
                {/* TODO: Add Horizontal line here */}
                <div className="border-b-2 border-black flex-grow-1"></div>
                <p>{ethers.utils.formatEther(recipient.value)}</p>
              </div>
            </li>
          ))}
        <li>
          <div className="flex justify-between mt-6">
            <p className="italic">total</p>
            <p className="italic">
              {total ? ethers.utils.formatEther(total) : ""}
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between mt-2">
            <p className="italic">your balance</p>
            <p className="italic">{tokenBalance}</p>
          </div>
        </li>
        <li>
          <div className="flex justify-between mt-2">
            <p className="italic">remaining</p>
            <p className="italic">{remaining}</p>
          </div>
        </li>
      </ul>
      <div className="mt-8">
        <div className="mt-6 flex items-center">
          <button
            onClick={disperse}
            className="px-2 py-3 italic"
            style={{
              background: "aquamarine",
              boxShadow: "6px 6px crimson",
            }}
          >
            disperse ether
          </button>
          {isDisperseSuccessful && (
            <p className="ml-4">Disperse token successful 🎉</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmEther;