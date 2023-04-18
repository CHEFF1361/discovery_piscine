



if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  arg1=$1
  arg2=$2
  arg3=$3

  echo "$arg1"
  if [ $# -ge 2 ]; then
    echo "$arg2"
  fi
  if [ $# -ge 3 ]; then
    echo "$arg3"
  fi
fi

