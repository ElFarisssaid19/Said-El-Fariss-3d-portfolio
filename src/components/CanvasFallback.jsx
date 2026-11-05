// Shown while a lazily loaded 3D scene downloads. It must not import
// three.js or drei, otherwise they would end up in the main bundle.
const CanvasFallback = () => (
  <div className="w-full h-full flex justify-center items-center">
    <span className="canvas-loader" role="status" aria-label="Loading 3D scene" />
  </div>
);

export default CanvasFallback;
