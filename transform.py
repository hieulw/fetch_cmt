from datetime import datetime

import polars as pl


# Function to check if a string is a valid date and parse it
def parse_date(date_str):
    try:
        # Define the current year
        current_year = datetime.now().year
        # Create a date string with the current year
        full_date_str = f"{date_str} {current_year}"
        # Parse the date string into a datetime object
        date_object = datetime.strptime(full_date_str, "%d %b %Y")
        # Format the date into "DD/MM/YYYY"
        return date_object.strftime("%d/%m/%Y")
    except ValueError:
        return None  #


df = pl.read_csv("data.csv", has_header=True)


# Function to clean the profile_url
def clean_profile_url(url):
    # If the URL contains 'profile.php', keep everything up to the first '&'
    url = url.replace("mbasic", "www")
    if "profile.php" in url:
        return url.split("&")[0]
    # Otherwise, strip off everything after '?'
    return url.split("?")[0]


def clean_comment_url(url):
    return url.split("&")[0]


def parse_date(date_str):
    return datetime.strptime(date_str, "%A %d %B %Y at %I:%M %p")


df = df.with_columns(
    [
        pl.col("profile_url")
        .map_elements(clean_profile_url, return_dtype=pl.Utf8)
        .alias("profile_url"),
        pl.col("comment_url")
        .map_elements(clean_comment_url, return_dtype=pl.Utf8)
        .alias("comment_url"),
        pl.col("date")
        .str.to_datetime(format="%A %d %B %Y at %I:%M %p", strict=False)
        .alias("date"),
    ]
).unique(subset=["comment_url"])

df.drop(["photo_url", "reaction_count"])

df.write_csv("data_clean.csv")

print(df.shape)