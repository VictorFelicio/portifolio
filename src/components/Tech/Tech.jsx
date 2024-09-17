/* eslint-disable react/prop-types */
export default function Tech({ src, name }) {
  return (
    <div className="about-tech">
      <img src={src} alt="" />
      <p>{name}</p>
    </div>
  );
}
