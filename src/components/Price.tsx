type PriceProps = {
  amount: string;
  className?: string;
};

export function Price({ amount, className = "" }: PriceProps) {
  return (
    <span className={className} aria-label={`${amount} naira`}>
      <span className="currency" aria-hidden="true">
        ₦{amount}
      </span>
    </span>
  );
}
