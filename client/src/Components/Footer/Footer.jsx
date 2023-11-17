export default function Footer() {
  return (
    <footer className="page-footer navbar-dark bg-dark">
      <div className="container">
        <p className="border-top mb-0 mt-4 pt-3 small">
          &copy; All rights reserved!{" "}
          <script>document.write(new Date().getFullYear())</script> Created By{" "}
          <a
            href="https://github.com/Galchony"
            className="text-muted font-weight-bold"
            target="_blank"
          >
            Galia Angelova.
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}
