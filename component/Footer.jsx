export const Footer = (props) => {
  return (
    <div className="mt-3">
      <p className="text-ssecondary text-center">
        copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
};
