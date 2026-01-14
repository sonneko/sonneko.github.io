{pkgs, ...}: {
  channel = "unstable";
  packages = [pkgs.nodejs];
}